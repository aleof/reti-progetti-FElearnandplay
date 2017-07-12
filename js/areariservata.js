/*function gestioneX(){
    alert("chiusura browser");
}*/
function init(){
    gestioneLocalStorage();
    gestioneF5();
}

function gestioneF5(){
    //if(controlla flag su xml esterno-se è = 1 esegui il blocco sotto altrimenti - non fare niente){
    if(isActive()){
        if(document.getElementById("login").getAttribute("name")=="visible"){
            if(confirm("Effettuando il refresh della pagina verrà eseguito automaticamente il logout. Confermi di voler uscire?")){
            //window.location.href="areariservata.html";
            //cambia flag e gestisci il logout
            }
            else{
                //mantieni il flag utnete attivo
                //lascia l'utente sulla pagina iniziale
                document.getElementById("login").setAttribute("hidden", "true");
                document.getElementById("login").setAttribute("name", "hidden");
                document.getElementById("navigationbar").removeAttribute("hidden");
                document.getElementById("logout").removeAttribute("hidden");
                document.getElementById("logout").setAttribute("name", "sp");
                document.getElementById("paginainiziale").removeAttribute("hidden");
            }
        } 
    }
}

function isActive(){
    //leggi xml e verifica se c'è qualcuno attivo
    var isActive = true;
    //ciclo for nel xml in cui ci sono i dati degli utenti. valorizzo la var isActive
    //for(i=0; i<=length; i++){
    // prendo elemento
    // if(var = 1 (l'utente è attivo))
    //    isActive=true;
    //}
    return isActive;
}

function accesso(){
    //dovresti fare tutta la logica di accesso su dei dati -- mock dei dati??
    //flag utente attivo a 1

    //se l'accesso  va a buon fine devi fare questo
    //$("#navigationbar").show(); //jquery
    try{
        document.getElementById("login").setAttribute("hidden", "true");
        document.getElementById("login").setAttribute("name", "hidden");

        document.getElementById("navigationbar").removeAttribute("hidden");
        document.getElementById("logout").removeAttribute("hidden");
        document.getElementById("paginainiziale").removeAttribute("hidden");
    }
    catch(Exception){
        alert("errore");
    }
}

function signup(){
    //dovresti fare tutta la logica di accesso su dei dati -- mock dei dati??
    //flag utente attivo a 1

    //se l'accesso  va a buon fine devi fare questo
    //$("#navigationbar").show(); //jquery
    try{
        document.getElementById("login").setAttribute("hidden", "true");
        document.getElementById("login").setAttribute("name", "hidden");

        document.getElementById("signup").removeAttribute("hidden");
    }
    catch(Exception){
        alert("errore");
    }
}

var utentiA = [];
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
        if(email==""){
            document.getElementById("nullemailerr").removeAttribute("hidden");
            document.getElementById("formatemailerr").setAttribute("hidden", "true");
            document.getElementById("emailerr").setAttribute("hidden", "true");
            signup = false;
        }
        /*else if(email=xml){
            document.getElementById("emailerr").removeAttribute("hidden");
            document.getElementById("formatemailerr").setAttribute("hidden", "true");
            document.getElementById("nullemailerr").setAttribute("hidden", "true");
        }*/
        else if(!email_reg_expr.test(email)){
            document.getElementById("formatemailerr").removeAttribute("hidden");
            document.getElementById("nullemailerr").setAttribute("hidden", "true");
            document.getElementById("emailerr").setAttribute("hidden", "true");
            signup = false;
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
            //utenti = (JSON.parse(localStorage.utenti));

            //aggiungiUtenteJSON(nome, cognome, email, password);
            

            document.getElementById("signup").setAttribute("hidden", "true");
            document.getElementById("login").setAttribute("name", "hidden");///controlla questo hidden
            document.getElementById("login").removeAttribute("hidden");
        }
    }
    catch(Exception){
        alert("errore");
    }
}

function gestioneLocalStorage(){
    if(localStorage.utenti){
        utentiA = JSON.parse(localStorage.utenti);
        /*for(var i=0; i<utentiA.length-1;i++){
            var nome = utentiA[i].nome;
            var cognome = utentiA[i].cognome;
            var email = utentiA[i].email;
            var password = utentiA[i].password;
            var u = {nome:nome,cognome:cognome,email:email,password:password}
            utentiA.push(u);
            localStorage.utenti = JSON.stringify(utentiA);
        }*/
    }
}

function esci(){//nomi function non possono essere uguali all'id dell'elemento
    //chiedi conferma che vuole uscire
    if(confirm("Stai per effettuare il logout. Confermi di voler uscire?")){
        //flag utnete attivo a zero !!!
        window.location.href="areariservata.html"
    }
    else{
        //rimani sulla pagina - annulla onclick
    }
}

function paginainiziale(){
    try{
        document.getElementById("listaprenotazioni").setAttribute("hidden", "true");
        document.getElementById("prenotazione").setAttribute("hidden", "true");
        document.getElementById("gestionemerce").setAttribute("hidden", "true");
        document.getElementById("dettagliomerce").setAttribute("hidden", "true");

        document.getElementById("paginainiziale").removeAttribute("hidden");
    }
    catch(Exception){
        alert("errore");
    }
}

function listapresentazioni(){
    try{
        document.getElementById("paginainiziale").setAttribute("hidden", "true");
        document.getElementById("prenotazione").setAttribute("hidden", "true");
        document.getElementById("gestionemerce").setAttribute("hidden", "true");
        document.getElementById("dettagliomerce").setAttribute("hidden", "true");

        document.getElementById("listaprenotazioni").removeAttribute("hidden");
    }
    catch(Exception){
        alert("error");
    }
}

function prenotazione(){
    try{
        document.getElementById("paginainiziale").setAttribute("hidden", "true");
        document.getElementById("listaprenotazioni").setAttribute("hidden", "true");
        document.getElementById("gestionemerce").setAttribute("hidden", "true");
        document.getElementById("dettagliomerce").setAttribute("hidden", "true");

        document.getElementById("prenotazione").removeAttribute("hidden");    
    }
        catch(Exception){
            alert("error");
    }
}

function gestionemerce(){
    try{
        document.getElementById("paginainiziale").setAttribute("hidden", "true");
        document.getElementById("listaprenotazioni").setAttribute("hidden", "true");
        document.getElementById("prenotazione").setAttribute("hidden", "true");
        document.getElementById("dettagliomerce").setAttribute("hidden", "true");

        document.getElementById("gestionemerce").removeAttribute("hidden");  
    }
    catch(Exception){
        alert("error");
    }
}

function dettagliomerce(){
    try{
        document.getElementById("paginainiziale").setAttribute("hidden", "true");
        document.getElementById("listaprenotazioni").setAttribute("hidden", "true");
        document.getElementById("prenotazione").setAttribute("hidden", "true");
        document.getElementById("gestionemerce").setAttribute("hidden", "true");

        document.getElementById("dettagliomerce").removeAttribute("hidden"); 
    }
    catch(Exception){
        alert("error");
    }
}