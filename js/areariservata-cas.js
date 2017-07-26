var utentiA = [];
var merciA = [];

/**
 * 
 * onLoad html
 * 
 */

function init(){
    gestioneF5();
    gestioneStorage();
}

function gestioneF5(){
    //if(controlla flag su xml esterno-se è = 1 esegui il blocco sotto altrimenti - non fare niente){
    if(sessionStorage.getItem("Active")!=null){
        if(isActive()){
            if(document.getElementById("login").getAttribute("name")=="visible"){
                if(confirm("Effettuando il refresh della pagina verrà eseguito automaticamente il logout. Confermi di voler uscire?")){
                //cambia flag e gestisci il logout
                sessionStorage.setItem("Active", "0");
                sessionStorage.setItem("User", "");
                }
                else{
                    //mantieni il flag utnete attivo
                    //lascia l'utente sulla pagina iniziale
                    document.getElementById("login").style.display="none";
                    document.getElementById("login").setAttribute("name", "hidden");
                    document.getElementById("navigationbar").style.display="inline-block";
                    document.getElementById("logout").style.display="inline-block";
                    //document.getElementById("logout").setAttribute("name", "sp");
                    document.getElementById("paginainiziale").style.display="inline-block";
                }
            } 
        }
    }
}

function gestioneStorage(){
    
    if(!localStorage.utenti){
        var utente = {nome:"default",cognome:"default",email:"default",password:"default"};    
        utentiA.push(utente);
        localStorage.utenti = JSON.stringify(utentiA);
    }
    if(!localStorage.merci){
        var merce = {utente:"default", descrizioneOrdine:"default", tipologia:"default",
                     quantita:"default", data:"default", ora:"default"};    
        merciA.push(merce);
        localStorage.merci = JSON.stringify(merciA);
    }
    if(sessionStorage.getItem("Active")==null){
        sessionStorage.setItem("Active", "0");
        sessionStorage.setItem("User", "");
    }
}

function isActive(){
    var isActive = true;
    if(sessionStorage.getItem("Active")==0)
        isActive=false;
    return isActive;
}

/**
 * 
 * Login
 * 
 */

function accesso(){
    //flag utente attivo a 1
    utentiA = JSON.parse(localStorage.getItem("utenti"));
    
    for(var i = 0; i<utentiA.length; i++){
        if(utentiA[i].email==document.getElementById("user").value){
            
            if(utentiA[i].password==document.getElementById("password").value){
                sessionStorage.setItem("Active", "1");
                sessionStorage.setItem("User", document.getElementById("user").value);
                try{
                    document.getElementById("login").style.display="none";
                    document.getElementById("login").setAttribute("name", "hidden");

                    document.getElementById("navigationbar").style.display="inline-block";
                    document.getElementById("logout").style.display="inline-block";
                    document.getElementById("paginainiziale").style.display="inline-block";
                    break;    
                }
                catch(Exception){
                    alert("errore");
                }
            }
            else{
                //password errata
                document.getElementById("passworderrore").style.display="inline-block";
                document.getElementById("emailerrore").style.display="none";
                break;
            }
        }
        else {
            //email non esistente
            document.getElementById("emailerrore").style.display="inline-block";
            document.getElementById("passworderrore").style.display="none";
        }
    }
}

/**
 * 
 * Signup
 * 
 */

function signup(){
    //flag utente attivo a 1
    try{
        document.getElementById("login").style.display="none";
        document.getElementById("login").setAttribute("name", "hidden");

        document.getElementById("signup").style.display="inline-block";
    }
    catch(Exception){
        alert("errore");
    }
}

function signupconfirm(data){
    var email_reg_expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
    var password_reg_expr = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    var signup = true;

    try{
        var nome = document.getElementById("nome").value;
        var cognome = document.getElementById("cognome").value;
        var email= document.getElementById("email").value;
        var password = document.getElementById("newpassword").value;
        var password2 = document.getElementById("password2").value;

        //  campi obbligatori == null
        if(nome==""){
            document.getElementById("nullnomeerr").style.display="inline-block";
            signup = false;
        }
        else
            document.getElementById("nullnomeerr").style.display="none";

        if(cognome==""){
            document.getElementById("nullcognomeerr").style.display="inline-block";
            signup = false;
        }
        else 
            document.getElementById("nullcognomeerr").style.display="none";

        // verifica email emailerr
        utentiA = JSON.parse(localStorage.getItem("utenti"));
        if(email==""){
            document.getElementById("nullemailerr").style.display="inline-block";
            document.getElementById("formatemailerr").style.display="none";
            document.getElementById("emailerr").style.display="none";
            signup = false;
        }
        else if(!email_reg_expr.test(email)){
            document.getElementById("formatemailerr").style.display="inline-block";
            document.getElementById("nullemailerr").style.display="none";
            document.getElementById("emailerr").style.display="none";
            signup = false;
        } 
       else if(localStorage.getItem("utenti")){
            for(var i = 0; i<utentiA.length; i++){
                if(utentiA[i].email==document.getElementById("email").value){
                    document.getElementById("emailerr").style.display="inline-block";
                    document.getElementById("formatemailerr").style.display="none";
                    document.getElementById("nullemailerr").style.display="none";
                    signup = false;
                }
            }
        }
        else{
            document.getElementById("nullemailerr").style.display="none";
            document.getElementById("formatemailerr").style.display="none";
            document.getElementById("emailerr").style.display="none";
        }

        // verifica password
        if(password==("")){
            document.getElementById("nullpassworderr").style.display="inline-block";
            document.getElementById("passworderr").style.display="none";
            document.getElementById("formatpassworderr").style.display="none";
            signup = false;
        }
        else if(!password_reg_expr.test(password)){
            document.getElementById("formatpassworderr").style.display="inline-block";
            document.getElementById("nullpassworderr").style.display="none";
            document.getElementById("passworderr").style.display="none";
            signup = false;
        }
        else if(password!=password2){
            document.getElementById("passworderr").style.display="inline-block";
            document.getElementById("nullpassworderr").style.display="none";
            document.getElementById("formatpassworderr").style.display="none";
            signup = false;
        }
        else{ 
            document.getElementById("nullpassworderr").style.display="none";
            document.getElementById("passworderr").style.display="none";
            document.getElementById("formatpassworderr").style.display="none";
            }

        if(signup){
            var utente={nome:nome,cognome:cognome,email:email,password:password};
            utentiA.push(utente);
            localStorage.utenti = JSON.stringify(utentiA);

            nome = null;
            cognome = null;
            email = null;
            password = null;
            password2 = null;

            document.getElementById("signup").style.display="none";
            document.getElementById("login").setAttribute("name", "hidden");
            document.getElementById("login").style.display="inline-block";
        }
    }
    catch(Exception){
        alert("errore");
    }
}

function annullasignupconfirm(){
    document.getElementById("nome").value = null;
    document.getElementById("cognome").value = null;
    document.getElementById("email").value = null;
    document.getElementById("newpassword").value = null;
    document.getElementById("password2").value = null;

    document.getElementById("signup").style.display="none";
    document.getElementById("login").setAttribute("name", "hidden");
    document.getElementById("login").style.display="inline-block";
}

/**
 * 
 * Logout
 * 
 */

function esci(){//nomi function non possono essere uguali all'id dell'elemento
    //chiedi conferma che vuole uscire
    if(confirm("Stai per effettuare il logout. Confermi di voler uscire?")){
        //flag utnete attivo a zero !!!
        sessionStorage.setItem("Active", "0");
        sessionStorage.setItem("User", "0");
        window.location.href="areariservata.html"
    }
    else{
        //rimani sulla pagina - annulla onclick
    }
}