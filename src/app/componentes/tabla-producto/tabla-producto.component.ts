import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit{
  idProducto!:string;
  Editado=false;
  listaProducto:any=[]
  formEditarProducto!:FormGroup;

  constructor( private productoservice : ProductosService, private formbuilder:FormBuilder){

    this.formEditarProducto=formbuilder.group({
 
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
  ngOnInit(): void {
    this.productoservice.getProducto().subscribe(producto=>{
      this.listaProducto=producto;
    })
  }
  eliminarProducto(producto: Producto){
    Swal.fire({
      title: 'Estas Seguro de Eliminar este Producto?',
      text: "no podrá revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Producto Eliminado!',
          'success'
        )
        const res=this.productoservice.deleteProducto(producto);
      }
    })
  }
  getProductoID(i:number){
    this.formEditarProducto.setValue({
      //id:this.listaProducto[i].id,
      nombre:this.listaProducto[i].nombre,
      costo:this.listaProducto[i].costo,
      foto:this.listaProducto[i].foto
    })
    this.idProducto=this.listaProducto[i].id;
  }
  editarProducto(){
    const response = this.productoservice.editProducto(this.idProducto,this.formEditarProducto.value);
    this.Editado=true;
    setTimeout(() => {
      this.Editado=false;
    }, 2000);
  }
}
