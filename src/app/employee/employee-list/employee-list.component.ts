import { Component, OnInit ,Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'cedify-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  encapsulation:ViewEncapsulation.None
})


export class EmployeeListComponent implements OnInit {

  isWeb=true;

  @Input() empList :Employee[];

  @Output() sendChildData = new EventEmitter<Employee>();

  @Output() childname:EventEmitter<string>= new EventEmitter();


  product:string = "aijaz ahmad";
 /* empList:Employee[] = [
    {
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

  ];*/

  constructor() { }

  ngOnInit(): void {
      console.log(this.empList)
  }


  sendData()
  {
      this.childname.emit(this.product);
  }


  childData:Employee;

 
  SendDataToParent(empdata:Employee)
  {
      this.childData = empdata;
      this.sendChildData.emit(empdata);

  }

}
