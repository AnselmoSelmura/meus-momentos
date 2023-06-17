import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  size = 1.5;
  font = 'arial';
  color = 'red';

  classes = ['green-title', 'small-title']

  underline = ['underline']
}
