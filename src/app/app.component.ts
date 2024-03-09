import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Comp1Component } from "./component/comp1/comp1.component";
import { TestComponent } from "./components/test/test.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthModule } from "./auth/auth.module";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    Comp1Component,
    TestComponent,
    AuthModule,
    ChildComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "my-app";
  // a = undefined;
  // b = null;
  // c = () => {
  //   return "vivek";
  // };
  // d = () => {
  //   console.log("srijan");
  // };
  // e = 5;
  // arr = [1, 2, 3, 4, 5];
  // handleReceiveData(e: any) {
  //   console.log(e);
  // }
  // value = "dddd";
  // handleClick() {
  //   console.log("clicked");
  //   this.value = "efnjkfjer";
  //   this.title = "new title";
  // }
  // handleInput(e: any) {
  //   // return;
  //   const regex = /^[a-zA-Z]+$/;
  //   const isValid = regex.test(e.target.value);
  //   console.log("isValid", isValid);
  //   if (isValid) {
  //     e.preventDefault();
  //   }
  //   this.title = (e.target as HTMLInputElement).value;
  //   console.log("changed called", this.title);
  // }
  getDataFromChild(e: any) {
    this.title = e.val;
    console.log(e);
  }
}
