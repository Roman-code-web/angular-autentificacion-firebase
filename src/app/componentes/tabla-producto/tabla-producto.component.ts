import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

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
}
