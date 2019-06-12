import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: 'AIzaSyDvC9i2CPlJ0-RvaZceSOsFTEFoamZVs-s',
            authDomain: 'openclassrooms-blog.firebaseapp.com',
            databaseURL: 'https://openclassrooms-blog.firebaseio.com',
            projectId: 'openclassrooms-blog',
            storageBucket: 'openclassrooms-blog.appspot.com',
            messagingSenderId: '525107929057',
            appId: '1:525107929057:web:56bbc9f76fe11865'
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

}

