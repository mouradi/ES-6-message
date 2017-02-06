import {Message} from './message'
import {Ajax} from './ajax'
import {Firebasejs} from './firebasejs'
import {DriverManager} from './driverManager'
import {UserManager} from './userManager'
import {User} from './user'
// verification de l'authentification
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        $('#authentification').modal('hide');

    } else {
        // No user is signed in.
        $('#authentification').modal('show');
    }
});

//choix la nature de traitement soit Ajax ou bien Firebase
/*
 *@var  driver : changer celons le coix de l'utilisateur (new Ajax | new Firebase)
 */
driver1 = new Firebasejs();
/*
 *@event evenement sur les deux radion qui a id ajax
 */
document.getElementById("ajax").addEventListener('click', function () {
    driver1 = new Ajax();
    console.log('ajax');
})
/*
 *@event evenement sur les deux radion qui a id firebase
 */
document.getElementById("firebase").addEventListener('click', function () {
    driver1 = new Firebasejs();
    console.log('firebase');
})
/*
 *@event evenement sur la btn ajouter : execute la fonction addMessage de classe DriverManager
 */
document.querySelector("#ajouter").addEventListener("click", function (event) {
    event.preventDefault(false);
    DriverManager.addMssage(driver1)
})
/*
 *@var a variable initialisé par 0 utiliser comme un compteur pour calculer le nombre des message et ajouter a chaque message un nemuro
 */
var a = 0;

/*
 *@event evenement sur l'objet ref de la firebase qui est deja initialisé sur index.html permet l'ajout des messages*/
ref.on('child_added', function (snap) {
    a++;
    let message = new Message();
    let email = ''
    let userfirebase = firebase.auth().currentUser;

    if (userfirebase) {
        // User is signed in.
        email = userfirebase.email;
    } else {
        // No user is signed in.
        $('#authentification').modal('show');
        throw "essayez-vous de se connecter!!!";
    }
    message.id = snap.key;
    message.email = snap.val().email;
    message.etat = snap.val().etat == 1 ? 'Normal' : 'Urgent';
    message.objet = snap.val().objet;
    message.titre = snap.val().titre;
    message.date = snap.val().date;
    if (message.email == email)
        DriverManager.ajouterMessage(message, a)
});
/*
 *@event evenement sur ref pour la supprission des messages si il est supprimé dans la base firebase
 */
ref.on('child_removed', function (snap) {
    DriverManager.supprimerMessage($("#" + snap.key))
})

/*
 @event pour la supprission des lignes selectionnée par user
 */
document.getElementById("selectAll").addEventListener("click", DriverManager.checkAll);
$('#deleteAll').on('click', function () {
    DriverManager.supprimerLesLignesSelectionnees(driver1);
});

document.getElementById("signin199").addEventListener('click', function (event) {
    event.preventDefault(false);
    UserManager.connect();
});

document.getElementById("signup").addEventListener('click', function (event) {
    event.preventDefault(false);
    UserManager.ajouterUser();
});
document.getElementById("liksignout").addEventListener('click', function (event) {
    event.preventDefault(false);
    UserManager.signout();

});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $("#menuEmail").text(user.email.match(/[a-zA-Z0-9]*/));
    } else {
        // No user is signed in.

        $('#authentification').modal('show');
    }
});


$("#facebook").click(function () {
    UserManager.facebookConnect();
});
$("#google").click(function () {
    UserManager.googleConnect();
});

