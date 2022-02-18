import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");

    this.service.GetUsuariosId(0)
      .subscribe(data => {
        this.usuario = data;
      })

      /*
      this.service.GetUsuariosId(+id)
      .subscribe(data => {
        this.usuario = data;
      })
      */
  }

  Actualizar() {

  }

}
