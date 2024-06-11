import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-drugie-zadanie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drugie-zadanie.component.html',
  styleUrl: './drugie-zadanie.component.css'
})
export class DrugieZadanieComponent {
  tablica: string[] = [];

  ngOnInit() {
    this.tablica.push("ngOnInit");
    
  }
  ngDoCheck() {

    this.tablica.push("ngDoCheck");
    
  }
  ngAfterContentInit() {

    this.tablica.push("ngAfterContentInit");
   
  }

  ngAfterContentChecked() {

    this.tablica.push("ngAfterContentChecked");
    
  }

  ngAfterViewInit() {

    this.tablica.push("ngAfterViewIni");
    
  }

  ngAfterViewChecked() {

    this.tablica.push("ngAfterViewChecked");
    
  }
}
