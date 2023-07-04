import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VentasDiarias } from './pizzas-model.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-pizzas-component',
  templateUrl: './pizzas-component.component.html',
  styleUrls: ['./pizzas-component.component.css']
})
export class PizzasComponentComponent implements OnInit{

  myForm: FormGroup;
  pizzas: any = [];
  subTotalesList: any = [];
  subTotal: number =  0;
  total: number = 0;
  chica = 'chica';

  
  constructor(private readonly fb: FormBuilder, private formBuilder: FormBuilder) {
    this.myForm = this.initForm();
  }

 ngOnInit(){
    this.calcularTotal();

  }

  calcularTotal(){
      
   this.total = this.pizzas.reduce((a:number,c:any) => a +c.subtotales,0);
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      dir: ['', [Validators.required]],
      tel: [''],
      numPizzas: [''],
      ingrediente: [''],
      tamanio: ['']
    });
  }

  onSubmit(){
    this.pizzas.push(this.myForm.value);

    //Calcular subTOTAL
    this.subTotal = parseInt(this.pizzas[this.pizzas.length-1].numPizzas) * parseInt(this.pizzas[this.pizzas.length-1].tamanio);
    this.pizzas['subtotales'] = this.subTotal;
    this.pizzas[this.pizzas.length-1].subtotales = this.subTotal;
    //this.subTotalesList.push(this.subTotal);

    // console.log(this.subTotalesList);
     console.log(this.pizzas);

  }

  quitar(){
    this.pizzas.pop();
    this.calcularTotal();
  }

  terminar(){
    Swal.fire({
      title: '¿Estás seguro de que deseas continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        // Seleccionado "Aceptar" en la ventana de confirmación
        // Aquí puedes agregar la lógica que se ejecutará si el usuario confirma
        Swal.fire(
          'Continuando...',
          'La venta a sido confirmada.',
          'success'
        );
        
         this.calcularTotal();
  
      } else {
        // Seleccionado "Cancelar" en la ventana de confirmación
        // Aquí puedes agregar la lógica que se ejecutará si el usuario cancela
        Swal.fire(
          'Cancelado',
          'La acción ha sido cancelada.',
          'error'
        );
      }
    });
    
  }


}
