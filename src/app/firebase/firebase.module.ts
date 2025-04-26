import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD7hWNdyHq8SEwZN_y6De2ASYrs1rCo6mc',
  authDomain: 'appdeveloper-b0a81.firebaseapp.com',
  projectId: 'appdeveloper-b0a81',
  storageBucket: 'appdeveloper-b0a81.firebasestorage.app',
  messagingSenderId: '1050971189495',
  appId: '1:1050971189495:web:3174fee57e6d31d8fc23f2',
  measurementId: 'G-14PXBPZ4FB',
};

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
