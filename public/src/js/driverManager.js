/**
 * Created by MUSSAT on 16/01/2017.
 */

import {Message} from  './message'
import {Driver} from  './driver'
import {Ajax} from  './ajax'
import {Firebasejs} from  './firebasejs'
export {
    Message,
    Driver,
    Ajax,
    Firebasejs
}
/*
*@class nom : drivermanager fonction : implement les fonction de gestion des messages
* @function getMessage
* @function addMessage
* @function removemessgae
* @functionupdatemessage
 */
export class DriverManager {


    static getMessage() {
        //(id,titre,objet,etat,date,email)
        let message;
        let objet = document.querySelector("#objet").value.trim();
        let titre = document.querySelector("#titre").value.trim();
        let etat = 1;
        $("input[name='etat']").each(function () {
            if (this.checked) {
                if (this.value.trim() == 0) etat = 0;
                else etat = 1
            }

        })

        let email = 'aa'
        let userfirebase = firebase.auth().currentUser;

        if (userfirebase) {
            // User is signed in.
            email = userfirebase.email;
        } else {
            // No user is signed in.
            $('#authentification').modal('show');
            throw "essayez-vous de se connecter!!!";
        }
        let key = ref.push().key;
        if (objet != '' & titre != '' & /[a-zA-Z0-9]+/.test(titre) & /[a-zA-Z0-9]+/.test(objet)) {

            message = new Message(key, titre, objet,
                etat,
                new Date().toString(),
                email);
            message.email = email;

            $('#alert-danger').addClass('hidden');
            document.querySelector("#titre").focus();
            document.querySelector("#titre").style = `border: 2px solid blue;
            border-radius: 4px;`;
            document.querySelector("#titre").value = ""
            document.querySelector("#objet").style = `border: 2px solid blue;
            border-radius: 4px;`;
            document.querySelector("#objet").value = ""
        } else {
            $('#alert-danger').removeClass('hidden');
            document.querySelector("#titre").focus();
            document.querySelector("#titre").style = `border: 2px solid red;
            border-radius: 4px;`;
            document.querySelector("#objet").style = `border: 2px solid red;
            border-radius: 4px;`;
            throw 'Entrer tous les lignes de votre message !!';
        }

        return message;
    }

    static addMssage(driver) {
        driver.addMessage(DriverManager.getMessage());
    }

    static removeMessage(driver, id) {
        $('#suppression').modal('show');
        $('#supprimer').click(function (event) {
            event.preventDefault(false);
            driver.removeMessage(id);
            $('#suppression').modal('hide');
        });
    }

    static updateMessage(driver) {

    }

    static ajouterMessage(message, nmMsg) {
        let clone = $('#divAdd tr').clone(false);
        clone.find(".tdNumero").text(nmMsg)
        clone.find(".tdEmail").text("" + message.date)
        clone.find(".tdTitre").text(message.titre)
        clone.find(".tdObjet").text(message.objet)
        clone.find(".tdEtat").text(message.etat)
        clone.find("input[type='checkbox']").each(function () {
            $(this).attr('name', 'check1');
        });
        if (message.etat == 'Urgent') clone.attr('bgcolor', '#FFB6C1');

        clone.find('.btn')[0].id = message.id;

        $(clone.find('.btn')[0]).on('click', function (event) {
            event.preventDefault();
            DriverManager.removeMessage(driver1, this.id);
        });

        $('#tablebody').append(clone.hide());
        clone.fadeIn(1000);
        clone.slideDown(500)
    }

    static supprimerMessage(id) {
        //$($(id).parent().parent()).fadeOut(1000).remove()
        //$($(id).parent().parent()).fadeOut(1000);

        $($(id).parent().parent()).slideUp(500, function () {
            $(this).remove();
        })
    }

    modifierMessage() {

    }


    static checkAll() {

        let check = document.getElementsByName("check1");

        let checkAll = document.getElementById("selectAll");
        if (checkAll.checked)
            for (var i = 0; i < check.length; i++) {
                if (check[i].checked)
                    check[i].checked = false;
                else if (!check[i].chacked)
                    check[i].checked = true;
            }
        else
            for (var i = 0; i < check.length; i++) {
                if (check[i].checked)
                    check[i].checked = false;
                else if (!check[i].chacked)
                    check[i].checked = true;
            }
    }


    static supprimerLesLignesSelectionnees(driver) {

        //1ere etape : configuration de selection des checkbox

        var selectRow = document.querySelectorAll(".table input[name='check1']");
        for (var i = 0; i < selectRow.length; i++) {
            if (selectRow[i].checked) {
                let idBtn = selectRow[i].parentNode.parentNode.querySelectorAll("button")[0].id;

                DriverManager.removeMessage(driver, idBtn);
            }

        }
    }

    static setMessageToDomInForm(message) {
        document.querySelector('#titre').value = message.titre;
        document.querySelector('#objet').value = message.value;
        if (message.etat == 0) {
            document.querySelector("input[name='etat'][value='0']").checked = true;
        } else {
            document.querySelector("input[name='etat'][value='1']").checked = true;
        }
    }

}