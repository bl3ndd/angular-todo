import { Injectable } from '@angular/core';
import {ITask} from "../Types";
import { Observable } from 'rxjs'
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks'

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl)
  }
  deleteTask(id: number): Observable<ITask> {
    return this.http.delete<ITask>(`${this.apiUrl}/${id}`)
  }
  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task)
  }
}
