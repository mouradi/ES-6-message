/**
 * Created by MUSSAT on 16/01/2017.
 */

/*
 *@class un abstract classe driver
 *
 */
/*
*@class abstarct classe nom : driver fonction super de classe de driver et firebasejs contient les attr et fonction comment entre ses deux classe
 * @function getMessage
 * @function addMessage
 * @function removemessgae
 * @functionupdatemessage
 */
export class Driver {

    /*
     * @constructor le constructeur de la classe abstract driver
     */
    constructor() {
        /*
         *interdit la creation des instance de la classe abstract driver
         */
        if (new.target === Driver) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        //else (called from child)
        // Check if all instance methods are implemented.
        if (this.addMessage === Driver.prototype.addMessage) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method addMessage.");
        }
        if (this.removeMessage === Driver.prototype.removeMessage) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method removeMessage.");
        }
        if (this.updateMessage === Driver.prototype.removeMessage) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method updateMessage.");
        }
    }

    /*
     *@function abstract static pour ajouter des messages
     * @param message a ajouter
     */
    static addMessage(massage) {
        /*
         *@test interdit l'appelle de la fonction addMessage par un instnce de la classe driver
         */
        if (this === Driver) {
            // Error Type 2. Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method addMessage.");
        } else if (this.addMessage === Driver.addMessage) {
            // Error Type 3. The child has not implemented this method.
            throw new TypeError("Please implement static abstract method addMessage.");
        } else {
            // Error Type 5. The child has implemented this method but also called `super.foo()`.
            throw new TypeError("Do not call static abstract method addMessage from child.");
        }
    }

    /*
     *@function abstract pour ajouter des message
     * @param message
     */

    addMessage(message) {
        // Error Type 6. The child has implemented this method but also called `super.foo()`.
        throw new TypeError("Do not call abstract method addMessage from child.");
    }

    /*
     *@function abstract static function
     *
     * @param idMess : id de message
     */

    static removeMessage(idMess) {
        if (this === Driver) {
            // Error Type 2. Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method addMessage.");
        } else if (this.removeMessage() === Driver.removeMessage) {
            // Error Type 3. The child has not implemented this method.
            throw new TypeError("Please implement static abstract method addMessage.");
        } else {
            // Error Type 5. The child has implemented this method but also called `super.foo()`.
            throw new TypeError("Do not call static abstract method addMessage from child.");
        }
    }

    /*
     *@function abstract function
     *
     * @param idMess : id de message
     */
    removeMessage(idMess) {
        // Error Type 6. The child has implemented this method but also called `super.foo()`.
        throw new TypeError("Do not call abstract method addMessage from child.");
    }


    /*
     *@function abstract pour update des messages
     * @param message

     */
    static updateMessage(message) {
        if (this === Driver) {
            // Error Type 2. Abstract methods can not be called directly.
            throw new TypeError("Can not call static abstract method updateMessage.");
        } else if (this.updateMessage === Driver.updateMessage) {
            // Error Type 3. The child has not implemented this method.
            throw new TypeError("Please implement static abstract method updateMessage.");
        } else {
            // Error Type 5. The child has implemented this method but also called `super.foo()`.
            throw new TypeError("Do not call static abstract method updateMessage from child.");
        }
    }

    /*
     *@function abstract pour update des messages
     * @param message

     */
    updateMessage(message) {
        // Error Type 6. The child has implemented this method but also called `super.foo()`.
        throw new TypeError("Do not call abstract method addMessage from child.");
    }
}