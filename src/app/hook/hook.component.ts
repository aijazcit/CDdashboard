import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cedify-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnDestroy, OnChanges,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

    @Input() hookval:string;

  constructor() { 

      console.log("constructor");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
      console.log("docheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange");
    console.log(changes);
  }
  ngOnDestroy(): void {
      console.log("OnDestroy");
  }

  ngOnInit(): void {
      console.log("OnInit");
  }

}
