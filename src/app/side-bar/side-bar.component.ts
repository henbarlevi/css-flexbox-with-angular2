/*component that display the top bar of the site*/
import { Component ,Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
        animations: [
    trigger('slideInOut', [
      state('in', style({
         left: '0'
      })),
      state('out', style({
           left: '-250px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
}
)

export class SideBarComponent {
    
   @Input() menuState: string;
  
}
