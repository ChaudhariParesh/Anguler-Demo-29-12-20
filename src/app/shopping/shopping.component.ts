import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor() { }
  a=0;
  getData(val1,val2){
    this.a=parseInt(val1) + parseInt (val2);
  }
  getSub(val1,val2){
    this.a=parseInt(val1) - parseInt (val2);
  }
  


  getdiv(val1,val2){
    this.a=parseInt(val1) / parseInt (val2);
  }
  getmul(val1,val2){
    this.a=parseInt(val1) * parseInt (val2);
  }
  



  ngOnInit(): void {
  }

}
