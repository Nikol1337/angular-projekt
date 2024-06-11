import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'
import { DrugieZadanieComponent } from '../drugie-zadanie/drugie-zadanie.component';

@Component({
  selector: 'app-wyswietl-stringa',
  standalone: true,
  imports: [CommonModule, DrugieZadanieComponent],
  templateUrl: './wyswietl-stringa.component.html',
  styleUrl: './wyswietl-stringa.component.css'
})
export class WyswietlStringaComponent {
  inputValue: string[] = [];
  
  
 
  onButtonClick(value: string) {
    this.inputValue.push(value);
  
   
  }
}
