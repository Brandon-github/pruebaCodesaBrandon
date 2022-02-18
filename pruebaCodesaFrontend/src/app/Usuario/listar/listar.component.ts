import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usuario';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios!: Usuario[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios()
      .subscribe(data => {
        this.usuarios = data;
      })
  }

  Editar(usuario:Usuario):void {
    localStorage.setItem("id", usuario.id.toString());
    this.router.navigate(["edit"]);
  }

}
