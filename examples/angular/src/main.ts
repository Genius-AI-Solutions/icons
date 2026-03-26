import { bootstrapApplication } from '@angular/platform-browser';

import { provideIcons } from '@geniusaisolutions/icons/angular';

import { AppComponent } from './app.component';
import { icons } from './ui.config';

bootstrapApplication(AppComponent, {
  providers: [provideIcons(icons)]
}).catch((error: unknown) => {
  console.error(error);
});
