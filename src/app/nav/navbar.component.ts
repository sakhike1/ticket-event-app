import { Component} from '@angular/core';

@Component ({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
       .nav.nav-bar-nav {font-size: 14px;}
       #searchForm {margin-right: 100px;}
       @media (max-width:1200px) {#searchForm {display: none}}
    `]

    
})

export class NavBarComponent {

}