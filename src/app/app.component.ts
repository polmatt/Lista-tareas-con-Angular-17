import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './service/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  listaTareas: string[] = []; // Array de tareas
  nuevaTarea: string = ''; // Variable para guardar la nueva tarea

  // INJECT
  private _tareaService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareaService.getTareas(); // Nos traemos todas las tareas
  }

  agregarTarea() {
    this._tareaService.agregarTarea(this.nuevaTarea); // Agregamos la nueva tarea
    this.nuevaTarea = ''; // Limpiamos la variable para que se borre lo que escribimos una vez que se haya agregado la tarea
    this.listaTareas = this._tareaService.getTareas(); // Nos traemos todas las tareas
  }

  eliminarTarea(index: number) {
    this._tareaService.eliminarTarea(index); // Eliminamos la tarea
    this.listaTareas = this._tareaService.getTareas(); // Nos traemos todas las tareas
  }
}
