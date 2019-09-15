import { Directive, HostListener, HostBinding, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector:"[appDropdown]"
})

export class dropdownDirective {
   @HostBinding("class.open") isopend=false;
   @HostBinding("style.color") color="red";
    @HostListener("click") onclick(){
        this.isopend=!this.isopend;
    }
}