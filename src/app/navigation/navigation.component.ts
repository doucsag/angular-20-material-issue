import { Component, Renderer2, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, DOCUMENT } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatSlideToggleModule,
    MatMenuModule,
  ],
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  onThemeChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.renderer.removeClass(this.document.body, 'light');
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.renderer.removeClass(this.document.body, 'dark');
      this.renderer.addClass(this.document.body, 'light');
    }
  }

  setTheme(theme: string): void {
    // Remove all theme classes
    ['theme-default', 'theme-brand', 'theme-teal', 'theme-rose', 'theme-purple', 'theme-amber'].forEach(t => {
      this.renderer.removeClass(this.document.body, t);
    });
    // Add the selected theme
    this.renderer.addClass(this.document.body, `theme-${theme}`);
  }
}
