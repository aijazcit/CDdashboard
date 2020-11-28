import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cedifyMydirective]'
})

export class MydirectiveDirective {

  constructor(private ele:ElementRef, private rend:Renderer2) { 

      this.ele.nativeElement.style.color='red';
      //this.rend.createElement(this.ele.nativeElement,"input");
     
  }

  @HostListener("mouseover")
  onmouseover(){
      this.ele.nativeElement.style.color='green';
  }

  @HostListener("mouseout")
  onmouseout(){
      this.ele.nativeElement.style.color=null;
  }

  @HostListener("click")
  onmouseclick(){
    alert("aaaaaaaaaa");
  }




}
