import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';


@Component({
  selector: 'cedify-pipesamples',
  templateUrl: './pipesamples.component.html',
  styleUrls: ['./pipesamples.component.css']
})


export class PipesamplesComponent implements OnInit {
 
  digits:number[];
 

  name:string;
  age:number;
  email:string;
  constructor() {
      this.name="aijaz ahmad";
      this.age = 12;
      this.email = "aijazcit@gmail.com";
      this.digits = [1,2,3,4,5,6,7,8,9];
  }

  ngOnInit(): void {
   
  }

}
