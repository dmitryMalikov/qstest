import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'hdv-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @HostBinding('attr.role') role = 'header';
    @HostBinding('class.header-holder') true;

    constructor() {}
}