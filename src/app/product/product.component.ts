import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  nm ="";
  pc="";
  Paresh(val) {
    this.nm =val;
    // this.pc=val;
  }
  Paresh1(val) {
    // this.nm =val;
    this.pc=val;
  }
  
  ngOnInit(): void {
  }

}
