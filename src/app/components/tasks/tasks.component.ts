import { Component, OnInit } from '@angular/core';
import { ITask } from "../../Types";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = []

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== id)
    })
  }

  addTask(task: ITask) {
    this.taskService.addTask(task).subscribe(() => {
      this.tasks.push(task);
    })
  }
}
