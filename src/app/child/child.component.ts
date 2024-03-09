import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-child",
  standalone: true,
  imports: [],
  templateUrl: "./child.component.html",
  styleUrl: "./child.component.css",
})
export class ChildComponent {
  @Input() name: string = "";
  @Output() sendData = new EventEmitter<any>();
  sendNow(obj: any) {
    this.sendData.emit(obj);
  }
  val = "angular";
  handleInput(e: any) {
    this.sendNow({ val: e.target.value });
  }
}
