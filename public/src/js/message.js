/**
 * Created by MUSSAT on 16/01/2017.
 */
/*
*@class nom : message fonction : est un objet de message contient les attrs :
* @attr : id : identifiant de message
* @attr : titre titre de message
* @attr : objet objet de message
* @attr : etat etat de message
* @attr : date date d'ajout le message
* @attr email email de user entrer le message
* @constructor
* *@param id
* @param titre
* ...
 */
export class Message {

    constructor(id, titre, objet, etat, date, email) {
        this._id = id;
        this._titre = titre;
        this._objet = objet;
        this._etat = etat;
        this._date = date;
        this._email = email;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get objet() {
        return this._objet;
    }

    set objet(objet) {
        this._objet = objet;
    }

    get titre() {
        return this._titre
    }

    set titre(titre) {
        this._titre = titre;
    }

    get etat() {
        return this._etat;
    }

    set etat(etat) {
        this._etat = etat;
    }

    get date() {
        return this._date;
    }

    set date(date) {
        this._date = date;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}