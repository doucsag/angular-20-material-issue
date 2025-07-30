import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    DashboardComponent,
    AddressFormComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'angular-material-19-theming';
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    // Apply default theme
    this.renderer.addClass(document.body, 'theme-default');
    this.renderer.addClass(document.body, 'light');
  }

  toggleTheme(): void {
    if (document.body.classList.contains('light')) {
      this.renderer.removeClass(document.body, 'light');
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
      this.renderer.addClass(document.body, 'light');
    }
  }

  setTheme(theme: string): void {
    // Remove all theme classes
    ['theme-default', 'theme-brand', 'theme-teal', 'theme-rose', 'theme-purple', 'theme-amber', 'theme-dbg'].forEach(t => {
      this.renderer.removeClass(document.body, t);
    });
    // Add the selected theme
    this.renderer.addClass(document.body, `theme-${theme}`);
  }
}
