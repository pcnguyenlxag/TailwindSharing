import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { ImageModule } from 'primeng/image';
import { LayoutService } from '../service/layout.service';
@Component({
  selector: 'app-topbar',
  imports: [CommonModule, StyleClassModule, ImageModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  constructor(public layoutService: LayoutService) { }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }
}
