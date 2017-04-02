
import { Component  ,trigger, state, style, transition, animate} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        marginLeft: '250px'
      })),
      state('out', style({
        marginLeft: '0'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'app works!';
  menuState: string = 'in';
  onToggle() {
    console.log('app');
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
