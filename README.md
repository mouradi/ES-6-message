# EcmaScript-6
Application avec firebase

##https://mmtravailrendue.firebaseapp.com/
pour tester voila @mail & mot de pass
#E-mail : admin@live.com
#password :admin1234
    
---------------------------------------------------------------------------------------------------------------------------------------------------------

##arborescence
    
public (dossier)            - Il contient les sous dossiers (dist sass src et les fichiers .json)<br>
    - index.html            - La page d'index<br>
    - database.rules.json   - la configuration de la base de données JSON de FIREBASE<br>
    - firebase.json         - DATABASE & HOSTING & SOURCE & DESTINATION<br>
    - README.md             - Ce Fichier (Informations)<br>
            - css    - Il contient les elements css specialement (bootstrap.min.css)<br> 
            - img    - Il contient les images utilisés<br>
            - js     - Il contient les elements JS<br>
                     -FIREBASE (DOSSIER) Il contient les fichiers de API Firebase<br>
---------------------------------------------------------------------------------------------------------------------------------------------------------

##MESSAGE   

    CONSTRUCTOR (id,objet,message,etat,date,email)<br>
    @toTr() return un formatage de ligne contenant tous les attributs du message par exemple : xxxxgmail.com	objet1 	message1 5 Février 2017 # Temps 23 H : 9 Min
---------------------------------------------------------------------------------------------------------------------------------------------------------

##AFirebase 
    
    STATIC @creerCompte(email,password) RETURN ERROR IF EXISTS  (   CREER UN COMPTE UTILISATEUR )
    STATIC @connexion(email,password)   RETURN USER  OU NULL    (   CONNECTER   L'UTILISATEUR   )
    STATIC @deconnexion()               RETURN ERROR IF EXISTS  (   DECONNECTER L'UTILISATEUR   )
---------------------------------------------------------------------------------------------------------------------------------------------------------

##Ajax      

    Ces fonctions utilisent le fonctionnement de (la classe Ajax que j'ai crée avec Ecmascript6)
 
    STATIC @creerXhr()                  RETURN XMLHTTPREQUEST (COMPATIBLE AVEC TOUT LES NAVIGATEURS)
    STATIC @creerRequete(type,url,data, callback) RETURN TEXTRESPONSE (TYPE ( GET OU POST ) URL (DESTINATION DE REQ) DATA (données a envoyer s'ils sont disponible ou null ou cas contraire) callback( FUNCTION aprés le retour de la requette Ajax)
    STATIC @creerCompte(email,password) RETURN ERROR IF EXISTS
    STATIC @connexion(email,password)   RETURN USER  OU NULL
    STATIC @deconnexion()               RETURN ERROR IF EXISTS
---------------------------------------------------------------------------------------------------------------------------------------------------------

##Jquery     

    Jquery.min.js : version minifié de Jquery
    Jquery        : Version développement

---------------------------------------------------------------------------------------------------------------------------------------------------------

##Built With

FIREBASE<br>
Ecmascript6 <br>
JQUERY<br>
HTML5/CSS3 <br>
BOOTSTRAP 

---------------------------------------------------------------------------------------------------------------------------------------------------------

##Authors

Mouradi Mohammed
  

---------------------------------------------------------------------------------------------------------------------------------------------------------

##License

No licence
