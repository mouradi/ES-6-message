/**
 * Created by MUSSAT on 05/02/2017.
 */
/*
*@class nom : user fonction : est un objet de l'utlisateur contient les attr :
* @attr email email d'utilisateur
* @attr password  password d'utilisateur
* @constructor
* *@paarm email
* *@param password
 */
export class User {

    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    set password(pass) {
        this._password = pass;
    }

    get password() {
        return this._password
    }

    get email() {
        return this._email
    }

    set email(em) {
        this._email = em;
    }
}