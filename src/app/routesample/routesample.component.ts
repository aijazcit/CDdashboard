import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cedify-routesample',
  templateUrl: './routesample.component.html',
  styleUrls: ['./routesample.component.css']
})

export class RoutesampleComponent implements OnInit {

    Id:number;
    flag:number= 10;
    pageNumber:number;
    val1:number;
    val2:number;
    val3:number;
    val4:number;


  constructor(private activatedR:ActivatedRoute, private router:Router) { 

      this.activatedR.params.subscribe((p)=>{
            this.Id = p.Id;
            this.pageNumber = p.PageNum;
            
      })


      this.activatedR.queryParams.subscribe((queryString)=>{
         
          this.val1=queryString.val1;
          this.val2=queryString.val2;
          this.val3 = queryString.val3;
          this.val4=queryString.val4;
      });

  }

    ngOnInit(): void {
        //alert(this.pageNumber);
        //alert(this.Id);
    }

    goToEmp()
    {
        this.router.navigate(['emp'], {queryParams:{empName:'aijaz Ahmad', empAge:19, empPhoneNumber:1234567890}});
    }

}
