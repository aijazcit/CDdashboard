import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cedifyHookDirective]'
})
export class HookDirectiveDirective {

  constructor(private ref:ElementRef) {

      //this.ref.nativeElement.style.color= 'pink';
   }


@HostListener("mouseover")
onmouseover()
{
    this.ref.nativeElement.style.color= 'pink';
}


@HostListener("mouseout")
OnMouseOut()
{
    this.ref.nativeElement.style.color='Green';

}

@HostListener("click")
onclick(){
    alert("Clicked paragraphp");
}

}
