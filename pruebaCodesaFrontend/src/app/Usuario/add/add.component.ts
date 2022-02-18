import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }


  Guardar() {
    this.service.createUsuario(this.usuario)
      .subscribe(data => {
        alert("Usuario Guardado con exito!");
        this.router.navigate(["listar"]);
      });
  }

}
