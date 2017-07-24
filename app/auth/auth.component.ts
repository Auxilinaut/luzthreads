import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app/auth/login.component.html'
})

export class LoginComponent {
  public error: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  onSubmit(formData) {
    if(formData.valid) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(
          (success) => {
          console.log(success);
          this.router.navigate(['/dashboard']);
        })
    .catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/dashboard']);
      })
    } else {
      this.error = 'Your form is invalid';
    }
  }
}

@Component({
  template: '<div class="container"><p>Sorry, no signups allowed</p></div>'
})

export class SignupComponent {

}

@Component({
  templateUrl: 'app/auth/resetpassword.component.html'
})

export class ResetpassComponent {
  public auth: any;
  public message: any;
  constructor(private afAuth: AngularFireAuth, @Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth()
    console.log(this.auth);
  }

  onSubmit(formData) {
     if(formData.valid) {
       console.log('Submission worked');
       this.auth.sendPasswordResetEmail(formData.value.email)
         .then( (response) => {
           console.log('Sent successfully');
           this.message = 'Check your email for reset link';
         })
         .catch( (error) => {
           this.message = error;
           console.log(error);
         })
     }
  }
}