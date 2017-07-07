/*function gestioneX(){
    alert("chiusura browser");
}*/

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