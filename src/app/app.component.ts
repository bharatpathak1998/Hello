import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Hello from Bridgelabz";
  imageUrl = "../assets/Bridgelabz logo.jpg";
  url = "https://www.bridgelabz.com/";
  userName: string = "";
  nameError: string = "";

  /**
   * Title for the Page - One way data Binding
   */
  ngOnInit(): void {
    this.title = "Hello from Bridgelabz"
  }

  /**
   * Method where on clicking Url will open
   */
  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  /**
   * Method to check whether username is valid or not
   */
  onInput($event: any) {
    console.log("change event occured!", $event.data);
    const nameRegex = RegExp('[A-Z]{1}[A-z]{2}');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name Is Incorrect";
  }
}
