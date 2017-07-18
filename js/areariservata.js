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
                    document.getElementById("login").setAttribute("hidden", "true");
                    document.getElementById("login").setAttribute("name", "hidden");
                    document.getElementById("navigationbar").removeAttribute("hidden");
                    document.getElementById("logout").removeAttribute("hidden");
                    //document.getElementById("logout").setAttribute("name", "sp");
                    document.getElementById("paginainiziale").removeAttribute("hidden");
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

            document.getElementById("signup").setAttribute("hidden", "true");
            document.getElementById("login").setAttribute("name", "hidden");
            document.getElementById("login").removeAttribute("hidden");
        }
    }
    catch(Exception){
        alert("errore");
    }
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
            document.getElementById("prenotazioneeffettuata").setAttribute("hidden");
            prenota=false;
        }
        if(tipologia==""){
            document.getElementById("nulltipologiaerr").removeAttribute("hidden");
            document.getElementById("prenotazioneeffettuata").setAttribute("hidden");
            prenota=false;
        }
        if(quantita=="" || quantita==0){
            document.getElementById("nullquantitaerr").removeAttribute("hidden");
            document.getElementById("prenotazioneeffettuata").setAttribute("hidden");
            prenota=false;
        }
        if(data==""){
            document.getElementById("nulldataerr").removeAttribute("hidden");
            document.getElementById("prenotazioneeffettuata").setAttribute("hidden");
            prenota=false;
        }//limitazione ai giorni
        if(ora==""){
            document.getElementById("nulloraerr").removeAttribute("hidden");
            document.getElementById("prenotazioneeffettuata").setAttribute("hidden");
            prenota=false;
        }//orario indicato  

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
        }
    }
    catch(Exception){
        alert("error");
    }
}

/**
 * 
 * Gesione delle varie pagine
 * 
 */

function paginainiziale(){
    try{
        document.getElementById("listaprenotazioni").setAttribute("hidden", "true");
        document.getElementById("prenotazione").setAttribute("hidden", "true");
        document.getElementById("gestionemerce").setAttribute("hidden", "true");
        document.getElementById("dettagliomerce").setAttribute("hidden", "true");

        document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");

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

        document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");

        document.getElementById("listaprenotazioni").removeAttribute("hidden");
        document.getElementById("listautente").innerHTML="Prenotazioni effettuate dall'utente: "+sessionStorage.getItem("User");

        var count = 0;
        var array;
        var table = document.getElementById("table")
        //var divtable = document.getElementById("divtable")
        //var table = documen.createElement("table");

        var tr = document.createElement("tr");
        //tr.style.cssText="";
        divtable.appendChild
        table.appendChild(tr);
        rows("Descrizione", tr);
        rows("Quantita" , tr); //parseInt(array[i].quantita,10);
        rows("Tipologia", tr);
        rows("Data", tr);
        rows("Ora", tr);

        array = JSON.parse(localStorage.getItem("merci"));
        for(var i=0; i<array.length; i++){
            if(array[i].utente==sessionStorage.getItem("User")){
                var tr = document.createElement("tr");
                //tr.style.cssText="";
                table.appendChild(tr);
                rows(array[i].descrizioneOrdine, tr);
                rows(array[i].quantita, tr); //parseInt(array[i].quantita,10);
                rows(array[i].tipologia, tr);
                rows(array[i].data, tr);
                rows(array[i].ora, tr);
                count++;
            }
        }
        document.getElementById("quantitalista").innerHTML="Quantita prenotazioni: "+count;
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

        document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");

        document.getElementById("prenotazioneeffettuata").setAttribute("hidden","true");
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

        document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");

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

        document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");

        document.getElementById("dettagliomerce").removeAttribute("hidden"); 
    }
    catch(Exception){
        alert("error");
    }
}

/**
 * 
 * Filtri
 * 
 */

function searchOnTable() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("filtroTabella");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    for(var l = 0; l < 5; l++){
        td = tr[i].getElementsByTagName("td")[l];
        if (td) {   
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
            } else {
                tr[i].style.display = "none";
            }
        } 
    }
  }
}

function searchOnColumn(ncolonna, tipocolonna) {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById(tipocolonna);
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[ncolonna];
    if (td) {   
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    } 
  }
}
function advanceSearch() {
  // Declare variables 
  var input1, input2, filter1, filter2, table, tr, td, i;
  input1 = document.getElementById("filtroQuantita");
  input2 = document.getElementById("filtroTipologia");
  filter1 = input1.value;
  filter2 = input2.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
      //for(var l = 0; l < 5; l++){
        td = tr[i].getElementsByTagName("td")[1];
        if (td.innerHTML == (filter1)) {
            td = tr[i].getElementsByTagName("td")[2];
            if(td.innerHTML.toUpperCase() == (filter2) || filter2=="") {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }   
        }
        else {
            tr[i].style.display = "none";
        } 
      }
  }

function viewAdvanceSearch(){
    document.getElementById("advanceSearchDiv").removeAttribute("hidden"); 
    document.getElementById("advanceSearchBut").setAttribute("hidden", "true");
}

function hiddenAdvanceSearch(){
    document.getElementById("advanceSearchBut").removeAttribute("hidden"); 
    document.getElementById("advanceSearchDiv").setAttribute("hidden", "true");
}

/**
 * 
 * Utility
 * 
 */

function hidden(value){
    document.getElementById(value).setAttribute("hidden", "true");
}

function show(value){
    document.getElementById(value).removeAttribute("hidden");
}

function rows(value, tr){
    
    var td = document.createElement("td");
    tr.appendChild(td).innerHTML=value;
}
