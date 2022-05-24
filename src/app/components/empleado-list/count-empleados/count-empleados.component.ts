import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  // Share data from Parent to Child (@Input)
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;
  //Share data from child to parent (With Event to child) @Output()
  @Output() countRadioButtonChange = new EventEmitter<string>();

  selectedRadioButton = 'Todos';
  constructor() {
    this.todos = 0;
    this.masculino=0;
    this.femenino=0;
  }

  ngOnInit(): void {
  }

  radioChange(): void{
    this.countRadioButtonChange.emit(this.selectedRadioButton);
  }

}
