import { NgComponentOutlet, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';

import type {
  ComponentIconRenderResult,
  MetadataIconRenderResult,
  ResolvedIconRenderResult,
} from './internal';
import { resolveIcon } from './internal';
import { ICON_REGISTRY } from './icon-registry.token';
import type { AngularIconComponent, AngularIconRegistry } from './types';

type ResolvedAngularComponentIcon = ComponentIconRenderResult<AngularIconComponent> & {
  readonly isDecorative: boolean;
};

type ResolvedAngularMetadataIcon = MetadataIconRenderResult & {
  readonly isDecorative: boolean;
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgComponentOutlet, NgFor, NgIf],
  selector: 'ga-icon',
  standalone: true,
  template: `
    <ng-container *ngIf="componentIcon as icon; else metadataIconTemplate">
      <ng-container
        *ngComponentOutlet="icon.component; inputs: componentInputs(icon)"
      />
    </ng-container>

    <ng-template #metadataIconTemplate>
      <svg
        *ngIf="metadataIcon as icon"
        [attr.aria-hidden]="icon.isDecorative ? 'true' : null"
        [attr.aria-label]="icon.props['aria-label'] ?? null"
        [attr.class]="className ?? null"
        [attr.fill]="icon.icon.strokeBased ? 'none' : 'currentColor'"
        [attr.height]="icon.props.size"
        [attr.role]="icon.isDecorative ? null : role ?? 'img'"
        [attr.stroke]="icon.icon.strokeBased ? 'currentColor' : null"
        [attr.stroke-linecap]="icon.icon.strokeBased ? 'round' : null"
        [attr.stroke-linejoin]="icon.icon.strokeBased ? 'round' : null"
        [attr.stroke-width]="icon.icon.strokeBased ? icon.props.strokeWidth : null"
        [attr.viewBox]="icon.icon.viewBox"
        [attr.width]="icon.props.size"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title *ngIf="icon.props.title">{{ icon.props.title }}</title>
        <path
          *ngFor="let pathData of pathItems(icon.icon.paths); trackBy: trackPath"
          [attr.d]="pathData"
        />
      </svg>
    </ng-template>
  `,
})
export class IconComponent {
  private readonly providedIcons = inject(ICON_REGISTRY, { optional: true });

  @Input({ required: true }) name!: string;
  @Input() icons?: AngularIconRegistry | undefined;
  @Input() size?: number | string | undefined;
  @Input() strokeWidth?: number | string | undefined;
  @Input() title?: string | undefined;
  @Input() className?: string | undefined;
  @Input() role?: string | undefined;
  @Input('aria-label') ariaLabel?: string | undefined;

  get resolved(): ResolvedIconRenderResult<AngularIconComponent> | null {
    const registry = this.icons ?? this.providedIcons;

    if (!registry) {
      return null;
    }

    return resolveIcon(registry, this.name, {
      size: this.size,
      strokeWidth: this.strokeWidth,
      className: this.className,
      title: this.title,
      'aria-label': this.ariaLabel,
    });
  }

  get componentIcon(): ResolvedAngularComponentIcon | null {
    const resolved = this.resolved;

    return resolved?.kind === 'component' ? resolved : null;
  }

  get metadataIcon(): ResolvedAngularMetadataIcon | null {
    const resolved = this.resolved;

    return resolved?.kind === 'metadata' ? resolved : null;
  }

  componentInputs(icon: ResolvedAngularComponentIcon) {
    return {
      ariaHidden: icon.isDecorative ? true : undefined,
      ariaLabel: icon.props['aria-label'],
      className: icon.props.className,
      role: icon.isDecorative ? undefined : this.role ?? 'img',
      size: icon.props.size,
      strokeWidth: icon.props.strokeWidth,
      title: icon.props.title,
    };
  }

  pathItems(paths: string | readonly string[]) {
    return typeof paths === 'string' ? [paths] : paths;
  }

  trackPath(_: number, pathData: string) {
    return pathData;
  }
}
