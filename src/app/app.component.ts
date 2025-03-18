import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutService } from './layout/service/layout.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ButtonModule, TopbarComponent, SidebarComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'RibbonSharing';

    constructor(public layoutService: LayoutService) {}

    get containerClass() {
        return {
            'layout-overlay': this.layoutService.layoutConfig().menuMode === 'overlay',
            'layout-static': this.layoutService.layoutConfig().menuMode === 'static',
            'layout-static-inactive': this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === 'static',
            'layout-overlay-active': this.layoutService.layoutState().overlayMenuActive,
            'layout-mobile-active': this.layoutService.layoutState().staticMenuMobileActive
        };
    }
}
