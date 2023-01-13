import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit{

  livro: any = {
    title: 'Learning JavaScript Data Structures and Algorithms',
    star: 4.54321,
    page: 314,
    price: 44.99,
    dateLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }
  constructor(){}
 
  livros: string[] = ['Angular 2', 'Java'];

  filtro: string = '';
  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

 

  ngOnInit() {
  }
}
