import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'token';
  private readonly userKey = 'user';
  private readonly apiUrl = 'http://127.0.0.1:8000/usuarios/login';

  constructor(private http: HttpClient) {}

  login(numeroEmpresa: string, contrasenia: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { numero_empresa: numeroEmpresa, contrasenia })
      .pipe(
        catchError(error => {
          const message = error.error?.detail || 'Error al iniciar sesión';
          return throwError(() => new Error(message));
        })
      );
  }

  guardarSesion(token: string, usuario: any): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(usuario));
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  getUserFullName(): string {
    const userData = localStorage.getItem(this.userKey);
    if (!userData) return '';
    const { nombre, apellidos } = JSON.parse(userData);
    return `${nombre} ${apellidos}`;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  getUsuario(): any | null {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
}
  
