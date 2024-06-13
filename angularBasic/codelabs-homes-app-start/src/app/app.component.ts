import { Component } from '@angular/core'

import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header class="brand-logo">
      <img src="/assets/logo.svg" alt="Logo" aria-hidden="true" />
    </header>
    <section class="content">
      <router-outlet />
    </section>
  </main> `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {}
