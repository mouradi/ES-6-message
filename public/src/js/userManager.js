/**
 * Created by MUSSAT on 05/02/2017.
 */
import {User} from './user'
/*
* @class nom : usermanager fonction : gestion des utilisateur contient les fonctions :
* @function createuser : ecrire user par un mot de passe et un email
* *@param user
* @function connect : connecter par un mot de passe et un email
* @function signin : ecrire une session par le mot de passe et un email
* *@param user
* @function getuserfromform : ecrire un objet user qui apartir de la formulaire d'inscription
* @function signout : fonction permet de femer la session
* @function facebookconnect ecrire une compte directement on utilise facebook
* @function googleconnect la meme chose que la dernniere mais on a avec google plus
* pas des attrs
 */
export class UserManager {
    static ajouterUser() {
        UserManager.createUser(UserManager.getUserFromForm())
    }

    //with firebase
    static createUser(user) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorCode = error.message;

            $(document.getElementById('loginerror')).slideDown(500)
            $(document.getElementById('loginerror')).removeClass('hidden');
            document.getElementById('msglogin').innerText = errorCode + " " + errorCode;
            throw errorCode + " " + errorCode;
            // ...
        });
    }

    static connect() {
        UserManager.signin(UserManager.getUserFromForm());

    }

    static signin(user) {
        let email = user.email;
        let password = user.password;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;

            var errorMessage = error.message;
            $(document.getElementById('loginerror')).slideDown(500)
            $(document.getElementById('loginerror')).removeClass('hidden');
            document.getElementById('msglogin').innerText = errorCode + " " + errorCode;
            // ...
            throw errorCode + "   " + errorCode;
        });
    }

    static getUserFromForm() {
        let user;
        let email = document.getElementById("loginemail").value.trim();
        let password = document.getElementById('loginpassword').value.trim();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == '' & password == '' & !re.test(email)) {
            $(document.getElementById('loginerror')).slideDown(500);
            $(document.getElementById('loginerror')).removeClass('hidden');
            document.getElementById('msglogin').innerText = "Veuillez saisir une adresse e-mail et le mot de passe !!";
            throw 'Entrer les donnees valide !!!!'
        } else {
            user = new User(email, password);
            user.password = password;
            user.email = email;
        }
        return user
    }

    static signout() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            $('#loginerror').addClass('hidden')
            $('#msglogin').text("");
            $('#loginemail').val("");
            $('#loginemail').focus();
            $('#loginpassword').val("");
            $('#authentification').modal('show');
        }, function (error) {
            // An error happened.
        });
    }

    static facebookConnect() {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        provider.setCustomParameters({
            'display': 'popup'
        });

        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function (error) {
        });
    }

    static googleConnect() {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        provider.setCustomParameters({
            'login_hint': 'abdotaouala@gmail.com'
        });
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
}