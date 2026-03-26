import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IconComponent } from '@geniusaisolutions/icons/angular';

import { getVisibleIconNames, totalIcons } from './ui.config';

@Component({
  imports: [CommonModule, FormsModule, IconComponent],
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="page">
      <section class="hero">
        <h1>Angular example</h1>
        <p class="lede">
          This app registers <code>allIcons</code> once with the Angular adapter
          and renders the full built-in catalog with native
          <code>&lt;ga-icon /&gt;</code> usage.
        </p>
      </section>

      <section class="controls">
        <label for="query">Search icon names</label>
        <input
          id="query"
          type="search"
          [(ngModel)]="query"
          placeholder="search, loader-2, book, alert, google..."
        />
      </section>

      <p class="stats">{{ visibleNames.length }} of {{ totalIcons }} icons visible</p>

      <p *ngIf="visibleNames.length === 0" class="empty">
        No icons match "{{ query }}"
      </p>

      <section *ngIf="visibleNames.length > 0" class="grid">
        <article *ngFor="let name of visibleNames; trackBy: trackName" class="card">
          <div class="stage">
            <ga-icon [name]="name" [size]="24" [aria-label]="name" />
          </div>
          <div class="copy">
            <p>{{ name }}</p>
            <code>{{ exampleMarkup(name) }}</code>
          </div>
        </article>
      </section>
    </main>
  `
})
export class AppComponent {
  readonly totalIcons = totalIcons;

  query = '';

  get visibleNames() {
    return getVisibleIconNames(this.query);
  }

  trackName(_: number, name: string) {
    return name;
  }

  exampleMarkup(name: string) {
    return `<ga-icon name="${name}" />`;
  }
}
