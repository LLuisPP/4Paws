import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any |  null = null; // Inicializa como null
  isSidebarOpen = false

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {
    // Obtiene el usuario actualmente autenticado al inicializar el componente
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // Si el usuario está autenticado, asigna el objeto de usuario a this.user
        this.user = user;
      } else {
        // Si el usuario no está autenticado, asigna null a this.user
        this.user = null;
      }
    });
  }

  updateUserProfile() {
    // Implementa aquí la lógica para actualizar el perfil del usuario
    // Puedes usar this.afAuth.currentUser para acceder al usuario actualmente autenticado
    // Actualiza la información del usuario (nombre, correo electrónico, etc.) utilizando métodos de Firebase Authentication
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
