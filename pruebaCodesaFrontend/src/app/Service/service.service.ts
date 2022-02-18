import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/pruebaCodesaBackend/usuarios';

  getUsuarios() {
    return this.http.get<Usuario[]>(this.Url);
  }

  createUsuario(usuario:Usuario) {
    return this.http.post<Usuario>(this.Url, usuario);
  }

  GetUsuariosId(id:number) {
    return this.http.get<Usuario>(this.Url+"/"+id);
  }

  UpdateUsuario(usuario:Usuario) {
    return this.http.put<Usuario>(this.Url+"/"+usuario.id, usuario);
  }
}
