import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent {
  formRegistroProducto!:FormGroup;

  constructor(private formproductoBuilder : FormBuilder , private productoservice : ProductosService , private router: Router ){
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
  try {
    const response = this.productoservice.addProducto(this.formRegistroProducto.value);
    Swal.fire({
     icon: 'success',
     title: 'Producto Agregado',
   }).then((result) => {
     this.router.navigate(['/home']);
   })  
  } catch (error) {
    console.log(error);
  }
    
  }
}
