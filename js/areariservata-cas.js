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