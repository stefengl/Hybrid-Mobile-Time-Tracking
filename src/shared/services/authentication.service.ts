import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ILoginModel } from '../models/interfaces/i-login.model';

@Injectable()
export class AuthenticationService {

  user: any = null;

  constructor(
    private fireAuth: AngularFireAuth,
    ) {

    this.handleAuthChange();
  }

  handleAuthChange(): void {
    this.fireAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  public authenticate(model: ILoginModel): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(model.email, model.password);
  }

  public register(model: ILoginModel): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(model.email, model.password);
  }

  public logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

}
