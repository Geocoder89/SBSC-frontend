import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Users } from '../models/Users';
@Injectable({ providedIn: 'root' })
export class UserService {
  userCollection: AngularFirestoreCollection<Users>;
  userDoc: AngularFirestoreDocument<Users>;
  users: Observable<Users[]>;
  user: Observable<Users>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<Users>('users', (ref) =>
      ref.orderBy('lastname', 'asc')
    );
  }

  getUsers(): Observable<Users[]> {
    // Get clients with the id
    this.users = this.userCollection.snapshotChanges().map((changes) => {
      return changes.map((action) => {
        const data = action.payload.doc.data() as Users;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.users;
  }

  // tslint:disable-next-line: typedef
  newUser(user: Users) {
    this.userCollection.add(user);
  }

  getUser(id: string): Observable<Users> {
    this.userDoc = this.afs.doc<Users>(`users/${id}`);
    this.user = this.userDoc.snapshotChanges().map((action) => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Users;
        data.id = action.payload.id;
        return data;
      }
    });

    return this.user;
  }
}
