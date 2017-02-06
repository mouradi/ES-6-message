(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define("main", [], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.main = mod.exports;
    }
})(this, function () {
    'use strict';

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Message = function () {
        function Message(id, titre, objet, etat, date, email) {
            _classCallCheck(this, Message);

            this._id = id;
            this._titre = titre;
            this._objet = objet;
            this._etat = etat;
            this._date = date;
            this._email = email;
        }

        _createClass(Message, [{
            key: "id",
            get: function get() {
                return this._id;
            },
            set: function set(id) {
                this._id = id;
            }
        }, {
            key: "objet",
            get: function get() {
                return this._objet;
            },
            set: function set(objet) {
                this._objet = objet;
            }
        }, {
            key: "titre",
            get: function get() {
                return this._titre;
            },
            set: function set(titre) {
                this._titre = titre;
            }
        }, {
            key: "etat",
            get: function get() {
                return this._etat;
            },
            set: function set(etat) {
                this._etat = etat;
            }
        }, {
            key: "date",
            get: function get() {
                return this._date;
            },
            set: function set(date) {
                this._date = date;
            }
        }, {
            key: "email",
            get: function get() {
                return this._email;
            },
            set: function set(email) {
                this._email = email;
            }
        }]);

        return Message;
    }();

    var Driver = function () {
        function Driver() {
            _classCallCheck(this, Driver);

            if (new.target === Driver) {
                throw new TypeError("Cannot construct Abstract instances directly");
            }

            if (this.addMessage === Driver.prototype.addMessage) {
                throw new TypeError("Please implement abstract method addMessage.");
            }
            if (this.removeMessage === Driver.prototype.removeMessage) {
                throw new TypeError("Please implement abstract method removeMessage.");
            }
            if (this.updateMessage === Driver.prototype.removeMessage) {
                throw new TypeError("Please implement abstract method updateMessage.");
            }
        }

        _createClass(Driver, [{
            key: "addMessage",
            value: function addMessage(message) {
                throw new TypeError("Do not call abstract method addMessage from child.");
            }
        }, {
            key: "removeMessage",
            value: function removeMessage(idMess) {
                throw new TypeError("Do not call abstract method addMessage from child.");
            }
        }, {
            key: "updateMessage",
            value: function updateMessage(message) {
                throw new TypeError("Do not call abstract method addMessage from child.");
            }
        }], [{
            key: "addMessage",
            value: function addMessage(massage) {
                if (this === Driver) {
                    throw new TypeError("Can not call static abstract method addMessage.");
                } else if (this.addMessage === Driver.addMessage) {
                    throw new TypeError("Please implement static abstract method addMessage.");
                } else {
                    throw new TypeError("Do not call static abstract method addMessage from child.");
                }
            }
        }, {
            key: "removeMessage",
            value: function removeMessage(idMess) {
                if (this === Driver) {
                    throw new TypeError("Can not call static abstract method addMessage.");
                } else if (this.removeMessage() === Driver.removeMessage) {
                    throw new TypeError("Please implement static abstract method addMessage.");
                } else {
                    throw new TypeError("Do not call static abstract method addMessage from child.");
                }
            }
        }, {
            key: "updateMessage",
            value: function updateMessage(message) {
                if (this === Driver) {
                    throw new TypeError("Can not call static abstract method updateMessage.");
                } else if (this.updateMessage === Driver.updateMessage) {
                    throw new TypeError("Please implement static abstract method updateMessage.");
                } else {
                    throw new TypeError("Do not call static abstract method updateMessage from child.");
                }
            }
        }]);

        return Driver;
    }();

    var Ajax = function (_Driver) {
        _inherits(Ajax, _Driver);

        function Ajax() {
            _classCallCheck(this, Ajax);

            return _possibleConstructorReturn(this, (Ajax.__proto__ || Object.getPrototypeOf(Ajax)).call(this));
        }

        _createClass(Ajax, [{
            key: "addMessage",
            value: function addMessage(message) {
                var data = JSON.stringify({
                    id: message.id,
                    email: message.email,
                    titre: message.titre,
                    objet: message.objet,
                    date: message.date
                });
                console.log(data);
                var xhr = void 0;
                if (window.XMLHttpRequest) xhr = new XMLHttpRequest();else xhr = new ActiveXObject("Microsoft.XMLHTTP");
                var url = "https://projet1-bb086.firebaseio.com/messages.json";
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.send(data);
            }
        }, {
            key: "removeMessage",
            value: function removeMessage(idMess) {
                $.ajax({
                    url: 'https://projet1-bb086.firebaseio.com/messages.json' + '?key=' + idMess,
                    type: 'DELETE',
                    success: function success(result) {}
                });
            }
        }, {
            key: "updateMessage",
            value: function updateMessage(message) {}
        }]);

        return Ajax;
    }(Driver);

    var Firebasejs = function (_Driver2) {
        _inherits(Firebasejs, _Driver2);

        function Firebasejs() {
            _classCallCheck(this, Firebasejs);

            return _possibleConstructorReturn(this, (Firebasejs.__proto__ || Object.getPrototypeOf(Firebasejs)).call(this));
        }

        _createClass(Firebasejs, [{
            key: "addMessage",
            value: function addMessage(message) {
                ref.push({
                    id: message.id,
                    titre: message.titre,
                    objet: message.objet,
                    etat: message.etat,
                    date: message.date,
                    email: message.email
                });
            }
        }, {
            key: "removeMessage",
            value: function removeMessage(idMess) {
                ref.child(idMess).remove();
            }
        }, {
            key: "updateMessage",
            value: function updateMessage() {}
        }]);

        return Firebasejs;
    }(Driver);

    var DriverManager = function () {
        function DriverManager() {
            _classCallCheck(this, DriverManager);
        }

        _createClass(DriverManager, [{
            key: "modifierMessage",
            value: function modifierMessage() {}
        }], [{
            key: "getMessage",
            value: function getMessage() {
                var message = void 0;
                var objet = document.querySelector("#objet").value.trim();
                var titre = document.querySelector("#titre").value.trim();
                var etat = 1;
                $("input[name='etat']").each(function () {
                    if (this.checked) {
                        if (this.value.trim() == 0) etat = 0;else etat = 1;
                    }
                });

                var email = 'aa';
                var userfirebase = firebase.auth().currentUser;

                if (userfirebase) {
                    email = userfirebase.email;
                } else {
                    $('#authentification').modal('show');
                    throw "essayez-vous de se connecter!!!";
                }
                var key = ref.push().key;
                if (objet != '' & titre != '' & /[a-zA-Z0-9]+/.test(titre) & /[a-zA-Z0-9]+/.test(objet)) {

                    message = new Message(key, titre, objet, etat, new Date().toString(), email);
                    message.email = email;

                    $('#alert-danger').addClass('hidden');
                    document.querySelector("#titre").focus();
                    document.querySelector("#titre").style = "border: 2px solid blue;\n            border-radius: 4px;";
                    document.querySelector("#titre").value = "";
                    document.querySelector("#objet").style = "border: 2px solid blue;\n            border-radius: 4px;";
                    document.querySelector("#objet").value = "";
                } else {
                    $('#alert-danger').removeClass('hidden');
                    document.querySelector("#titre").focus();
                    document.querySelector("#titre").style = "border: 2px solid red;\n            border-radius: 4px;";
                    document.querySelector("#objet").style = "border: 2px solid red;\n            border-radius: 4px;";
                    throw 'Entrer tous les lignes de votre message !!';
                }

                return message;
            }
        }, {
            key: "addMssage",
            value: function addMssage(driver) {
                driver.addMessage(DriverManager.getMessage());
            }
        }, {
            key: "removeMessage",
            value: function removeMessage(driver, id) {
                $('#suppression').modal('show');
                $('#supprimer').click(function (event) {
                    event.preventDefault(false);
                    driver.removeMessage(id);
                    $('#suppression').modal('hide');
                });
            }
        }, {
            key: "updateMessage",
            value: function updateMessage(driver) {}
        }, {
            key: "ajouterMessage",
            value: function ajouterMessage(message, nmMsg) {
                var clone = $('#divAdd tr').clone(false);
                clone.find(".tdNumero").text(nmMsg);
                clone.find(".tdEmail").text("" + message.date);
                clone.find(".tdTitre").text(message.titre);
                clone.find(".tdObjet").text(message.objet);
                clone.find(".tdEtat").text(message.etat);
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
                clone.slideDown(500);
            }
        }, {
            key: "supprimerMessage",
            value: function supprimerMessage(id) {

                $($(id).parent().parent()).slideUp(500, function () {
                    $(this).remove();
                });
            }
        }, {
            key: "checkAll",
            value: function checkAll() {

                var check = document.getElementsByName("check1");

                var checkAll = document.getElementById("selectAll");
                if (checkAll.checked) for (var i = 0; i < check.length; i++) {
                    if (check[i].checked) check[i].checked = false;else if (!check[i].chacked) check[i].checked = true;
                } else for (var i = 0; i < check.length; i++) {
                    if (check[i].checked) check[i].checked = false;else if (!check[i].chacked) check[i].checked = true;
                }
            }
        }, {
            key: "supprimerLesLignesSelectionnees",
            value: function supprimerLesLignesSelectionnees(driver) {

                var selectRow = document.querySelectorAll(".table input[name='check1']");
                for (var i = 0; i < selectRow.length; i++) {
                    if (selectRow[i].checked) {
                        var idBtn = selectRow[i].parentNode.parentNode.querySelectorAll("button")[0].id;

                        DriverManager.removeMessage(driver, idBtn);
                    }
                }
            }
        }, {
            key: "setMessageToDomInForm",
            value: function setMessageToDomInForm(message) {
                document.querySelector('#titre').value = message.titre;
                document.querySelector('#objet').value = message.value;
                if (message.etat == 0) {
                    document.querySelector("input[name='etat'][value='0']").checked = true;
                } else {
                    document.querySelector("input[name='etat'][value='1']").checked = true;
                }
            }
        }]);

        return DriverManager;
    }();

    var User = function () {
        function User(email, password) {
            _classCallCheck(this, User);

            this._email = email;
            this._password = password;
        }

        _createClass(User, [{
            key: "password",
            set: function set(pass) {
                this._password = pass;
            },
            get: function get() {
                return this._password;
            }
        }, {
            key: "email",
            get: function get() {
                return this._email;
            },
            set: function set(em) {
                this._email = em;
            }
        }]);

        return User;
    }();

    var UserManager = function () {
        function UserManager() {
            _classCallCheck(this, UserManager);
        }

        _createClass(UserManager, null, [{
            key: "ajouterUser",
            value: function ajouterUser() {
                UserManager.createUser(UserManager.getUserFromForm());
            }
        }, {
            key: "createUser",
            value: function createUser(user) {
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
                    var errorCode = error.code;
                    var errorCode = error.message;

                    $(document.getElementById('loginerror')).slideDown(500);
                    $(document.getElementById('loginerror')).removeClass('hidden');
                    document.getElementById('msglogin').innerText = errorCode + " " + errorCode;
                    throw errorCode + " " + errorCode;
                });
            }
        }, {
            key: "connect",
            value: function connect() {
                UserManager.signin(UserManager.getUserFromForm());
            }
        }, {
            key: "signin",
            value: function signin(user) {
                var email = user.email;
                var password = user.password;
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                    var errorCode = error.code;

                    var errorMessage = error.message;
                    $(document.getElementById('loginerror')).slideDown(500);
                    $(document.getElementById('loginerror')).removeClass('hidden');
                    document.getElementById('msglogin').innerText = errorCode + " " + errorCode;

                    throw errorCode + "   " + errorCode;
                });
            }
        }, {
            key: "getUserFromForm",
            value: function getUserFromForm() {
                var user = void 0;
                var email = document.getElementById("loginemail").value.trim();
                var password = document.getElementById('loginpassword').value.trim();
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (email == '' & password == '' & !re.test(email)) {
                    $(document.getElementById('loginerror')).slideDown(500);
                    $(document.getElementById('loginerror')).removeClass('hidden');
                    document.getElementById('msglogin').innerText = "le mot de passe ou l'email est incorrect !!";
                    throw 'Entrer des donnees valide !!!!';
                } else {
                    user = new User(email, password);
                    user.password = password;
                    user.email = email;
                }
                return user;
            }
        }, {
            key: "signout",
            value: function signout() {
                firebase.auth().signOut().then(function () {
                    $('#loginerror').addClass('hidden');
                    $('#msglogin').text("");
                    $('#loginemail').val("");
                    $('#loginemail').focus();
                    $('#loginpassword').val("");
                    $('#authentification').modal('show');
                }, function (error) {});
            }
        }, {
            key: "facebookConnect",
            value: function facebookConnect() {
                var provider = new firebase.auth.FacebookAuthProvider();
                provider.addScope('user_birthday');
                provider.setCustomParameters({
                    'display': 'popup'
                });

                firebase.auth().signInWithPopup(provider).then(function (result) {
                    var token = result.credential.accessToken;
                    var user = result.user;
                }).catch(function (error) {});
            }
        }, {
            key: "googleConnect",
            value: function googleConnect() {
                var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/plus.login');
                provider.setCustomParameters({
                    'login_hint': 'abdotaouala@gmail.com'
                });
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    var token = result.credential.accessToken;

                    var user = result.user;
                }).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    var email = error.email;

                    var credential = error.credential;
                });
            }
        }]);

        return UserManager;
    }();

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $('#authentification').modal('hide');
        } else {
            $('#authentification').modal('show');
        }
    });

    driver1 = new Firebasejs();

    document.getElementById("ajax").addEventListener('click', function () {
        driver1 = new Ajax();
        console.log('ajax');
    });

    document.getElementById("firebase").addEventListener('click', function () {
        driver1 = new Firebasejs();
        console.log('firebase');
    });

    document.querySelector("#ajouter").addEventListener("click", function (event) {
        event.preventDefault(false);
        DriverManager.addMssage(driver1);
    });

    var a = 0;

    ref.on('child_added', function (snap) {
        a++;
        var message = new Message();
        var email = '';
        var userfirebase = firebase.auth().currentUser;

        if (userfirebase) {
            email = userfirebase.email;
        } else {
            $('#authentification').modal('show');
            throw "essayez-vous de se connecter!!!";
        }
        message.id = snap.key;
        message.email = snap.val().email;
        message.etat = snap.val().etat == 1 ? 'Normal' : 'Urgent';
        message.objet = snap.val().objet;
        message.titre = snap.val().titre;
        message.date = snap.val().date;
        if (message.email == email) DriverManager.ajouterMessage(message, a);
    });

    ref.on('child_removed', function (snap) {
        DriverManager.supprimerMessage($("#" + snap.key));
    });

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

            $('#authentification').modal('show');
        }
    });

    $("#facebook").click(function () {
        UserManager.facebookConnect();
    });
    $("#google").click(function () {
        UserManager.googleConnect();
    });
});