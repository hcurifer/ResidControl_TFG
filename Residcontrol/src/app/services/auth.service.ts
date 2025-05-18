import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  private readonly key = 'user';

  login(nombre: string, apellidos: string): void {
    const user = { nombre, apellidos };
    localStorage.setItem(this.key, JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem(this.key);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  getUserFullName(): string {
    const userData = localStorage.getItem(this.key);
    if (!userData) return '';
    const { nombre, apellidos } = JSON.parse(userData);
    return `${nombre} ${apellidos}`;
  }
}
