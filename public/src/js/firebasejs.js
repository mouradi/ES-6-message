/**
 * Created by MUSSAT on 19/01/2017.
 */
import {Driver} from './driver'
export {
    Driver
}
/*
*@class nom : firebasejs enfant de driver fonction : permet de connecter et gerer les message par des fonctions firebase .
* @constructor
* @function addMessage ajouter un nouveau message
* *@param message
* @function removemessage supprimer un message
* *@param idMess identifiant de message
* @functoon updatemessage mise a jour des messages
 */
export class Firebasejs extends Driver {

    constructor() {
        super();
    }

    addMessage(message) {
        ref.push({
            id: message.id,
            titre: message.titre,
            objet: message.objet,
            etat: message.etat,
            date: message.date,
            email: message.email
        });
    }

    removeMessage(idMess) {
        ref.child(idMess).remove();
    }

    updateMessage() {

    }
}