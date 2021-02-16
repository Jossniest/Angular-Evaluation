import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  usuario = new User();
  usuarios: User[];

  url = 'http://localhost:62304/api/usuario';

  PostRequestUsuario(usuario: User) {
    return this.http.post(this.url, usuario);
  }

  PutRequestUsuario(id: number, usuario: User) {
    return this.http.put(`${this.url}/${id}`, usuario);
  }

  GetUsuario() {
    return this.http.get<User[]>(this.url);
  }
}
