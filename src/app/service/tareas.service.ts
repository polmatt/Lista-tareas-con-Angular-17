import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private localStorageKey = 'listaTareas';

  getTareas(): string[] {
    return (
      JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []
    );
  }

  agregarTarea(tarea: string) {
    const tareas = this.getTareas(); // Nos traemos todas las tareas
    tareas.push(tarea); // Agregamos la nueva tarea
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); // Guardamos la nueva lista de tareas
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas(); // Nos traemos todas las tareas
    tareas.splice(index, 1); // Slice sirve para eliminar un elemento de un array, el 1 es porque elimina 1
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); // Guardamos la nueva lista de tareas
  }
}
