/*component that display the top bar of the site*/
import { Component ,Output,Input, EventEmitter ,trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],

})
export class TopBarComponent {
  
  @Output() toggle = new EventEmitter();

  //when clicking to open/close the sidebar
  onToggle(){
    console.log('toggle');
    this.toggle.emit();
    
  }
}
