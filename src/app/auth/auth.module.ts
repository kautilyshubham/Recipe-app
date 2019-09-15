import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        SingInComponent,
        SignUpComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
    ]
})
export class AuthModule{

}