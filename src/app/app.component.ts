import { Component, VERSION } from '@angular/core';
import { Registro } from './models/registro';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  registroArray : Registro[] = [
    { id: 1,  name: "nico", mail : "mail1"},
    { id: 2,  name: "mar", mail : "mail2"},
    { id: 3,  name: "las", mail : "mail3"}
  ]

  registroSel: Registro = new Registro();

  agregaEdita(){
    if (this.registroSel.id === 0 ){
      this.registroSel.id = this.registroArray.length + 1;
      this.registroArray.push(this.registroSel)
    }
    
    this.registroSel = new Registro()
  }

  traeDatos(registro){
    this.registroSel = registro 
  }

  eliminar(){
    if(confirm("Seguro?")){
      this.registroArray = this.registroArray.filter( registro => registro !== this.registroSel)
      this.registroSel = new Registro
    }
    
  }

}
