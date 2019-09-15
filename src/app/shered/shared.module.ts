import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dropdownDirective } from './dropdown.directive';

@NgModule({
    declarations:[dropdownDirective],
    exports:[
        CommonModule,
        dropdownDirective]
})
export class SharedModule{

}