import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
      },
      {
        label: 'UI Components',
        items: [
          { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
          { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
          { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
          { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
          { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] }
        ]
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/pages'],
        items: [
          {
            label: 'Landing',
            icon: 'pi pi-fw pi-globe',
            routerLink: ['/landing']
          },
          {
            label: 'Auth',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Login',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/auth/login']
              },
              {
                label: 'Error',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/auth/error']
              },
              {
                label: 'Access Denied',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/auth/access']
              }
            ]
          },
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/pages/crud']
          }
        ]
      },
    ];
  }
}
