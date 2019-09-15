import { AuthService } from './../auth.servise';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const pass = form.value.pass;
    this.authService.signInUser(email, pass);
    form.reset();
  }
  cancelForm(){
    this.router.navigate(['/'], {relativeTo: this.route})
  }
}
