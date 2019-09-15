import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    tocken: string;
    constructor(private router: Router){}
    signUp( email: string, pass: string){
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(
            error =>{
                console.log(error);
            }
        )
    }

    signInUser(email, pass){
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(  
            response=> {
                this.router.navigate(['/recipes']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (tk: string)=> this.tocken = tk
                )
            }
        )
        .catch(
            error=> console.log(error)
        );
    }

    getTocken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (tk: string)=> this.tocken = tk
        );
        return this.tocken;
    }

    isAuthenticated(){
        return this.tocken != null;
    }

    logout(){
        firebase.auth().signOut();
        this.tocken = null;
    }
}