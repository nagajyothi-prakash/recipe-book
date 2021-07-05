import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
       .other {
        margin-left: auto;
       }
    `]
})
export class HeaderComponent {
    collapsed = true;
}