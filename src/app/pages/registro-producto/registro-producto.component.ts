import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent {
  formRegistroProducto!:FormGroup;

  constructor(private formproductoBuilder : FormBuilder , private productoservice : ProductosService ){
    this.formRegistroProducto=formproductoBuilder.group({
      nombre:['',
      [
        Validators.required
      ]
      ],
      costo:['',
      [
        Validators.required
      ]
      ],
      foto:['',
      [
        Validators.required
      ]
      ]
    })
  }

 async RegistrarProducto(){
     console.log(this.formRegistroProducto.value)
     const response = this.productoservice.addProducto(this.formRegistroProducto.value)
     console.log(response)
  }
}
