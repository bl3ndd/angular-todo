import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {ITask} from "../../Types";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: ITask
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter()
  faTimes = faTimes
  faCheck = faCheck

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.onDeleteTask.emit(id)
  }

}
