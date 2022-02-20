import { Component} from '@angular/core';
import { menuItems } from 'src/app/shared/models/menu-item-midel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems: menuItems[] = [
    { 
      path: '/counter',
      title: 'Simple Counter'
    },
    {
      path:'/login',
      title: 'Login'
    },
    {
      path:'/planner',
      title: 'Planner'
    },
    {
      path:'/cat-facts',
      title: 'Cat Facts'
    },
    {
      path:'/users',
      title: 'Users'
    }
  ];
}
