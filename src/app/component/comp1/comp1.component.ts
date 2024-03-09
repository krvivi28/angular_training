import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  booleanAttribute,
  numberAttribute,
} from "@angular/core";

function changeName(name: string) {
  return name + " love";
}
@Component({
  selector: "app-comp1",
  standalone: true,
  imports: [],
  templateUrl: "./comp1.component.html",
  styleUrl: "./comp1.component.css",
})
export class Comp1Component implements OnInit {
  ngOnInit(): void {}
  @Input({ alias: "name", transform: changeName }) user: string = "";
  @Input({ transform: booleanAttribute }) x: string = "";
  @Input({ transform: numberAttribute }) y: string = "";
  @Output() sendData = new EventEmitter<string>();
  sendDataFromChild() {
    this.sendData.emit("data from child");
  }
}
