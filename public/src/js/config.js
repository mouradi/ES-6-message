/**
 * Created by MUSSAT on 27/01/2017.
 */
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBNdLiyMss80cGBuqP4qMYkTNgm_i9H7bs",
    authDomain: "mmtravailrendue.firebaseapp.com",
    databaseURL: "https://mmtravailrendue.firebaseio.com",
    storageBucket: "mmtravailrendue.appspot.com",
    messagingSenderId: "367957958772"
};
//firebase.initializeApp(config);
const fb = firebase
    .initializeApp(config)
    .database()
    .ref();
export {
    fb
}
