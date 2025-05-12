import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db };

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class FirebaseModule {}
