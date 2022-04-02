import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ITask} from "../../Types";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter()

  value: string;
  date: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onAddTask.emit({
      id: (Math.random() * 10000),
      text: this.value,
      date: this.date,
      checked: false,
    })
    this.value = ''
    this.date = ''
  }
}
