import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

// ✅ Import AOS only on the client-side inside the component
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideAnimations()
  ]
}).catch(err => console.error(err));