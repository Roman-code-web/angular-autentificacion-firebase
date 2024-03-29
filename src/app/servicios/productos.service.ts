import { Injectable } from '@angular/core';
import { collectionData, Firestore} from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc , updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private fireStore : Firestore) { }

  addProducto(producto:Producto){
    const productoRef = collection(this.fireStore, 'productos');
    return addDoc(productoRef, producto)    
  }

  getProducto():Observable<Producto[]>{
    const productoRef = collection(this.fireStore, 'productos')
    return collectionData(productoRef, {idField:'id'}) as Observable<Producto[]>
  }
  deleteProducto( producto : Producto){
    const productoRef = doc(this.fireStore, `productos/${producto.id}`)
    return deleteDoc(productoRef);
  } 

  editProducto(id:string, producto: Producto){
    const productoRef = doc(this.fireStore, `productos/${id}`)
    console.log(productoRef)
    return updateDoc(productoRef, {...producto})
  }
  
}
 
