import { Injectable,NgZone } from '@angular/core';
import { User } from "../models/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,   //  Inyectar Servicio Firestore
    public afAuth: AngularFireAuth, // Inyectar el servicio de autenticación de Firebase
    public router: Router,  
    public ngZone: NgZone, // Servicio NgZone para eliminar la advertencia de alcance externo
    public jwtHelper: JwtHelperService
  
  ) { 
    
    /* Guardar datos de usuario en almacenamiento local cuando
    iniciado sesión y configurando nulo al cerrar sesión*/
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
  }
})
}
// Iniciar sesión con correo electrónico / contraseña
SignIn(email, password) {
  return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['/dashboard']);
      });
      this.SetUserData(result.user);
    }).catch((error) => {
     // window.alert("Por favor revisar credenciales")
       window.alert(error.message)
    })
}

  // Regístrese con correo electrónico / contraseña
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Llame a la función SendVerificaitonMail () cuando un nuevo usuario firme
        y vuelve la funcion*/
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  // Enviar verificación por correo electrónico cuando se registre un nuevo usuario
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
    this.router.navigate(['verify-email-address']);
    })
    }

  // Restablecer contraseña olvidada
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Devuelve verdadero cuando el usuario está conectado y 
  // el correo electrónico está verificado
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user !== null && user.emailVerified !== false) {
      return true;

    }
    else{
      return false;
    }
    
  }

// Iniciar sesión usando Facebook
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  // Iniciar sesión usando Twitter
  TwitterAuth() {
    return this.AuthLogin(new auth.TwitterAuthProvider());
  }

  // Iniciar sesión usando Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Lógica de autenticación para ejecutar cualquier proveedor de autenticación  
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
        this.SetUserData(result.user);
          this.router.navigate(['dashboard']);
          
        })
     
    }).catch((error) => {
      window.alert(error)
    })
  }


  /* Configurar datos de usuario al iniciar sesión con nombre de usuario / contraseña,
  registrarse con nombre de usuario / contraseña e iniciar sesión con autenticación social
  proveedor en la base de datos de Firestore usando el servicio AngularFirestore + AngularFirestoreDocument*/
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // desconectar
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.setItem('user', null);
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }



}
