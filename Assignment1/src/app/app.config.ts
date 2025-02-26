import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // This import should be correct

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};