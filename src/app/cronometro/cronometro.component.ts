import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  nome: string = "Anselmo";
  idade: number = 23;
  telefone: number = 935149902;

  hobe = ['Progamar', 'video Jogos', 'Cantar', 'Ler', 'Conduzir']

  carro = {
    nome: "RollRouce",
    cor: "Preto e Branco",
    rodas: "72Polegadas Cromada"
  }
}
