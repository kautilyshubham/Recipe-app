import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthService } from '../auth.servise';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const pass = form.value.pass;
    this.authService.signUp( email, pass);
    };

    cancelForm(){
      this.router.navigate(['/'], {relativeTo: this.route})
    }
  }
