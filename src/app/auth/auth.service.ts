import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    constructor(private router: Router){}

    token: string;
    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                err => console.log(err)
            )
    }

    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => { 
                    this.router.navigate(['/'])
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )
            .catch(
                error => console.log(error)
            )
    }

    getToken(){
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => { this.token = token; }
            );

        return this.token;
    }

    public isAuthenticated(){
        return this.token != null;
        //console.log(this.token);
    }

    signout(){
        firebase.auth().signOut();
        this.token = null;
    }
}