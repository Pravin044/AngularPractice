import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  username: string = "";
  email: string = "";
  feedback: string = "";

  submit() {
    console.log(this.username, "\n", this.email, "\n", this.feedback);

  }

  clear() {
    this.username = "";
    this.email = "";
    this.feedback = "";

  }
}
