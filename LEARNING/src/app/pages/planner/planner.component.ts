import { Component, OnInit,} from '@angular/core';
import { plannerTask } from 'src/app/shared/models/planner-task.model';

enum FilterType {
  Pending = 0,
  Done = 1,
  All = 2
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
 plannerTasks: plannerTask[] = [
  {
    description: 'Buy potatos',
    done: false
  },
  {
    description: 'Feed the cat',
    done: false
  }

];
 taskInputValue = '';
 pendingTaskCount = 0;
 visibleTasks?: plannerTask[];
 filterType = FilterType;
 selectedFilterType = FilterType.All;
 

 ngOnInit(): void {
     this.setVisibleTasks();
     this.setPendingTaskCount();
 }

addTask(): void {
  console.log(this.taskInputValue)
  const trimmedValue = this.taskInputValue.trim();
  

  if (trimmedValue){
    const newTask = {description: trimmedValue, done: false};
    this.plannerTasks.push(newTask)
    this.taskInputValue = '';
    this.setPendingTaskCount();
  }
}

deleteTask(index: number): void {
  this.plannerTasks = this.plannerTasks.filter((task, i) => i !== index);
  this.setPendingTaskCount();
}
setPendingTaskCount(): void{
  this.pendingTaskCount = this.plannerTasks.filter(task => !task.done).length;
  this.setVisibleTasks();
}

clearAllTask(): void{
  this.plannerTasks = [];
  this.setPendingTaskCount();
}

setVisibleTasks(): void {
  if (this.selectedFilterType === FilterType.Pending) {
    this.visibleTasks = this.plannerTasks.filter(tasks => !tasks.done);
  } else if (this.selectedFilterType === FilterType.Done){
    this.visibleTasks = this.plannerTasks.filter(task => task.done)
  } else {
    this.visibleTasks = [...this.plannerTasks];
  }

}

setSelectedFilterType(type: FilterType): void {
this.selectedFilterType = type;
this.setVisibleTasks()

}
}
