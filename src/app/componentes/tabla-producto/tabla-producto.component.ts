import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit{
  listaProducto:any=[]
  constructor( private productoservice : ProductosService){}
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
}
