import { Injectable, NgZone } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private ngZone: NgZone, private router: Router) {
    // this.fbAuth.authState.subscribe((user) => {
    //   if (user) {
    //     console.log('user', user);
    //   }
    // });
  }
  // signIn(email, password) {
  //   return this.fbAuth.signInWithEmailAndPassword(email, password);
  //   .then((result)=>{
  //     this.router.navigate(['/'])
  //   })
  //   .catch((error)=>{
  //     window.alert(error.message)
  //   })
  // }
  // signUp (email,password){
  //   return this.fbAuth.signInWithEmailAndPassword(email, password);

  //   .then((result)=>{
  //     this.router.navigate(['/'])
  //   })
  //   .catch((error)=>{
  //     window.alert(error.message)
  //   })

  // }
  // logOut(){
  //   return this.fbAuth.signOut().then(()=>{
  //     this.router.navigate['/login']
  //   })
  // }
}
