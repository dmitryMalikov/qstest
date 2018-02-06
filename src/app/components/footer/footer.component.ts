import {Component,HostBinding} from '@angular/core';

@Component({
    selector: 'hdv-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    @HostBinding('attr.role') role = 'footer';
    @HostBinding('class.footer-holder') true;

    constructor() {}
}