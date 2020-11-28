import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './employee';


@Component({
  selector: 'coedify-employee',
  templateUrl: './employee.component.html',
  //template:`<h1>Employee Detail
  //Records </h1>`,
  styleUrls: ['./employee.component.css']
  //styles:['h1 { font-size:20px;color:blue;background-color:pink;} ' ]
})


export class EmployeeComponent implements OnInit {

  number=100;
  pageNumber=2;
  employee:Employee = {
    id:1,
    name:'aijaz',
    age:33,
    dob:new Date('10-nov-2020'),
    email:'aijazcit@gmail.com',
    salary:2200

  }

  childEmpData:Employee[]=[{id:1,
    name:'aijaz',
    age:33,
    dob:new Date('10-nov-2020'),
    email:'aijazcit@gmail.com',
    salary:2200
    },
    {id:2,
      name:'aijaz',
      age:33,
      dob:new Date('10-nov-2020'),
      email:'aijazcit@gmail.com',
      salary:2200}]

  empdata:Employee[] = [{
    id:1,
  name:'aijaz',
  age:33,
  dob:new Date('10-nov-2020'),
  email:'aijazcit@gmail.com',
  salary:2200
  },
  {id:2,
    name:'aijaz',
    age:33,
    dob:new Date('10-nov-2020'),
    email:'aijazcit@gmail.com',
    salary:2200},
  {id:3,
    name:'aijaz',
    age:33,
    dob:new Date('10-nov-2020'),
    email:'aijazcit@gmail.com',
    salary:2200},
  {id:4,
    name:'aijaz',
    age:33,
    dob:new Date('10-nov-2020'),
    email:'aijazcit@gmail.com',
    salary:2200},
  {id:5,
    name:'aijaz',
    age:33,
    dob:new Date('10-nov-2020'),
    email:'aijazcit@gmail.com',
    salary:2200},
  ];

  render= true;

  employeeName='aijaz ahmad';

  department ="Electronics and Communication";

  empName = 'google.com';

  constructor(private router:Router, private activateR:ActivatedRoute) {

          this.activateR.queryParams.subscribe((empDetail)=>{
                alert(empDetail.empName);
                alert(empDetail.empAge);
          });

   }

  ngOnInit(): void {
  }

  toggletable()
  {
      this.render = !this.render;
  }

  sendDatavalue(data)
  {
     alert(data);
     
  }

  empSelectedVal:Employee;

  selectedData(empVal:Employee)
  {
      this.empSelectedVal = empVal;
  }

  sampleRoute()
  {
      this.router.navigate(['/routesample',this.number,this.pageNumber]);
  }

}
