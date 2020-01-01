import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';
  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo','Voli', 'VW'];

  filteredBrands: any[];

  brand: string;
  keyString = '';

  getText(event){
    console.log(event.query);
  }

  filterBrands(event) {
        this.filteredBrands = [];
        this.keyString = event.query;
        for(let i = 0; i < this.brands.length; i++) {
            let brand1 = this.brands[i];
            if(brand1.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand1);
            }
        }
    }
}
