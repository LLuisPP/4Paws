import { Injectable } from '@angular/core';
import { Establishment } from '../models/establishment.model'; // Importa la interfaz de datos

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  // Simula datos de establecimientos destacados
  private establishments: Establishment[] = [
    { id: 1, name: 'Establecimiento 1', description: 'Descripción del establecimiento 1' },
    { id: 2, name: 'Establecimiento 2', description: 'Descripción del establecimiento 2' },
    // Agrega más establecimientos destacados aquí
  ];

  getFeaturedEstablishments(): Establishment[] {
    return this.establishments;
  }
}
