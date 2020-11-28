import { Component } from '@angular/core';

@Component({
  selector: 'cedify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CDdashboard';

  role='Admin';

  hookLife:string="hook On Change property";
}
