import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

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

  // Pipes assincronos
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = interval(2000)
  .pipe(
    map((valor: any) => 'Valor assíncrono 2')
  );



  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  // Maneira correta de usar filtro nos projetos reais
  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
       v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

  ngOnInit() {
  }
}
