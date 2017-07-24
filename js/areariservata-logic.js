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
                    document.getElementById("login").setAttribute("hidden", "true");
                    document.getElementById("login").setAttribute("name", "hidden");

                    document.getElementById("navigationbar").removeAttribute("hidden");
                    document.getElementById("logout").removeAttribute("hidden");
                    document.getElementById("paginainiziale").removeAttribute("hidden");
                    break;    
                }
                catch(Exception){
                    alert("errore");
                }
            }
            else{
                //password errata
                document.getElementById("passworderrore").removeAttribute("hidden");
                document.getElementById("emailerrore").setAttribute("hidden", "true");
                break;
            }
        }
        else {
            //email non esistente
            document.getElementById("emailerrore").removeAttribute("hidden");
            document.getElementById("passworderrore").setAttribute("hidden", "true");
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
        document.getElementById("login").setAttribute("hidden", "true");
        document.getElementById("login").setAttribute("name", "hidden");

        document.getElementById("signup").removeAttribute("hidden");
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
            document.getElementById("nullnomeerr").removeAttribute("hidden");
            signup = false;
        }
        else
            document.getElementById("nullnomeerr").setAttribute("hidden", "true");

        if(cognome==""){
            document.getElementById("nullcognomeerr").removeAttribute("hidden");
            signup = false;
        }
        else 
            document.getElementById("nullcognomeerr").setAttribute("hidden", "true");

        // verifica email emailerr
        utentiA = JSON.parse(localStorage.getItem("utenti"));
        if(email==""){
            document.getElementById("nullemailerr").removeAttribute("hidden");
            document.getElementById("formatemailerr").setAttribute("hidden", "true");
            document.getElementById("emailerr").setAttribute("hidden", "true");
            signup = false;
        }
        else if(!email_reg_expr.test(email)){
            document.getElementById("formatemailerr").removeAttribute("hidden");
            document.getElementById("nullemailerr").setAttribute("hidden", "true");
            document.getElementById("emailerr").setAttribute("hidden", "true");
            signup = false;
        } 
       else if(localStorage.getItem("utenti")){
            for(var i = 0; i<utentiA.length; i++){
                if(utentiA[i].email==document.getElementById("email").value){
                    document.getElementById("emailerr").removeAttribute("hidden");
                    document.getElementById("formatemailerr").setAttribute("hidden", "true");
                    document.getElementById("nullemailerr").setAttribute("hidden", "true");
                    signup = false;
                }
            }
        }
        else{
            document.getElementById("nullemailerr").setAttribute("hidden", "true");
            document.getElementById("formatemailerr").setAttribute("hidden", "true");
            document.getElementById("emailerr").setAttribute("hidden", "true");
        }

        // verifica password
        if(password==("")){
            document.getElementById("nullpassworderr").removeAttribute("hidden");
            document.getElementById("passworderr").setAttribute("hidden", "true");
            document.getElementById("formatpassworderr").setAttribute("hidden", "true");
            signup = false;
        }
        else if(!password_reg_expr.test(password)){
            document.getElementById("formatpassworderr").removeAttribute("hidden");
            document.getElementById("nullpassworderr").setAttribute("hidden", "true");
            document.getElementById("passworderr").setAttribute("hidden", "true");
            signup = false;
        }
        else if(password!=password2){
            document.getElementById("passworderr").removeAttribute("hidden");
            document.getElementById("nullpassworderr").setAttribute("hidden", "true");
            document.getElementById("formatpassworderr").setAttribute("hidden", "true");
            signup = false;
        }
        else{ 
            document.getElementById("nullpassworderr").setAttribute("hidden", "true");
            document.getElementById("passworderr").setAttribute("hidden", "true");
            document.getElementById("formatpassworderr").setAttribute("hidden", "true");
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

            document.getElementById("signup").setAttribute("hidden", "true");
            document.getElementById("login").setAttribute("name", "hidden");
            document.getElementById("login").removeAttribute("hidden");
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

    document.getElementById("signup").setAttribute("hidden", "true");
    document.getElementById("login").setAttribute("name", "hidden");
    document.getElementById("login").removeAttribute("hidden");
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

/**
 * 
 * Prenotazione
 * 
 */

function prenota(){
    //aggiungi valori nel campo merci
    merciA = JSON.parse(localStorage.getItem("merci"));

    try{
        var descr = document.getElementById("descrizioneOrdine").value;
        var tipologia = document.getElementById("tipologia").value;
        var quantita= document.getElementById("quantita").value;
        var data = document.getElementById("data").value;
        var ora = document.getElementById("ora").value;
        var prenota = true;

        if(descr==""){
            document.getElementById("nulldescrerr").removeAttribute("hidden");
            prenota=false;
        }else
            document.getElementById("nulldescrerr").setAttribute("hidden","true");
        if(tipologia==""){
            document.getElementById("nulltipologiaerr").removeAttribute("hidden");
            prenota=false;
        }else
            document.getElementById("nulltipologiaerr").setAttribute("hidden","true");
        if(quantita=="" || quantita==0){
            document.getElementById("nullquantitaerr").removeAttribute("hidden");
            prenota=false;
        }else
            document.getElementById("nullquantitaerr").setAttribute("hidden","true");
        if(data==""){
            document.getElementById("nulldataerr").removeAttribute("hidden");
            
            prenota=false;
        }//limitazione ai giorni
        else
            document.getElementById("nulldataerr").setAttribute("hidden","true");
        if(ora==""){
            document.getElementById("nulloraerr").removeAttribute("hidden");
            prenota=false;
        }//orario indicato  
        else
            document.getElementById("nulloraerr").setAttribute("hidden","true");
        if(prenota){
            var merce = {utente:sessionStorage.getItem("User"), descrizioneOrdine:descr, tipologia:tipologia,
                     quantita:quantita, data:data, ora:ora};    
            merciA.push(merce);
            localStorage.merci = JSON.stringify(merciA);  

            document.getElementById("prenotazioneeffettuata").removeAttribute("hidden"); 
            document.getElementById("descrizioneOrdine").value=null;
            document.getElementById("tipologia").value=null;
            document.getElementById("quantita").value=null;
            document.getElementById("data").value=null;
            document.getElementById("ora").value=null;
        }else{   
            if(!document.getElementById("prenotazioneeffettuata").hasAttribute("hidden"))
                document.getElementById("prenotazioneeffettuata").setAttribute("hidden", "true");
        }
    }
    catch(Exception){
        alert("error");
    }
}