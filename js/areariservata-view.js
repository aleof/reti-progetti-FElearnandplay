/**
 * 
 * Gesione delle varie pagine
 * 
 */

function paginainiziale(){
    try{
        document.getElementById("listaprenotazioni").style.display="none";
        document.getElementById("prenotazione").style.display="none";
        document.getElementById("gestioneprenotazioni").style.display="none";
        document.getElementById("gestioneprenotazioniADMIN").style.display="none";

        /*document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");*/

        document.getElementById("paginainiziale").style.display="inline-block";
    }
    catch(Exception){
        alert("errore");
    }
}

/*function listapresentazioni(){
    try{
        document.getElementById("paginainiziale").setAttribute("hidden", "true");
        document.getElementById("prenotazione").setAttribute("hidden", "true");
        document.getElementById("gestioneprenotazioni").setAttribute("hidden", "true");
        document.getElementById("gestioneprenotazioniADMIN").setAttribute("hidden", "true");

        document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");

        document.getElementById("listaprenotazioni").removeAttribute("hidden");
        document.getElementById("listautente").innerHTML="Prenotazioni effettuate dall'utente: "+sessionStorage.getItem("User");

        creaTabella();
    }
    catch(Exception){
        alert("error");
    }
}*/
function listapresentazioni(){
    try{
        document.getElementById("paginainiziale").style.display="none";
        document.getElementById("prenotazione").style.display="none";
        document.getElementById("gestioneprenotazioni").style.display="none";
        document.getElementById("gestioneprenotazioniADMIN").style.display="none";

        document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");

        document.getElementById("listaprenotazioni").style.display="inline-block";
        document.getElementById("listautente").innerHTML="Prenotazioni effettuate dall'utente: "+sessionStorage.getItem("User");

        creaTabella();
    }
    catch(Exception){
        alert("error");
    }
}

function prenotazione(){
    try{
        document.getElementById("paginainiziale").style.display="none";
        document.getElementById("listaprenotazioni").style.display="none";
        document.getElementById("gestioneprenotazioni").style.display="none";
        document.getElementById("gestioneprenotazioniADMIN").style.display="none";

        document.getElementById("nulldescrerr").style.display="none";
        document.getElementById("nulltipologiaerr").style.display="none";
        document.getElementById("nullquantitaerr").style.display="none";
        document.getElementById("nulldataerr").style.display="none";
        document.getElementById("nulloraerr").style.display="none";

        document.getElementById("descrizioneOrdine").value=null;
        document.getElementById("tipologia").value=null;
        document.getElementById("quantita").value=null;
        document.getElementById("data").value=null;
        document.getElementById("ora").value=null;

        /*document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");*/

        document.getElementById("prenotazioneeffettuata").style.display="none";
        document.getElementById("prenotazione").style.display="inline-block";   
    }
        catch(Exception){
            alert("error");
    }
}

function gestioneprenotazioni(){
    try{
        document.getElementById("paginainiziale").style.display="none";
        document.getElementById("listaprenotazioni").style.display="none";
        document.getElementById("prenotazione").style.display="none";
        document.getElementById("gestioneprenotazioniADMIN").style.display="none";

        document.getElementById("gestable").remove();
        document.getElementById("divgestable").appendChild(document.createElement("table")).setAttribute("id", "gestable");

        document.getElementById("gestioneprenotazioni").style.display="inline-block";  
        document.getElementById("listautentegestione").innerHTML="Gestione delle prenotazioni effettuate dall'utente: "+sessionStorage.getItem("User");

        creaTabellaGestione();
    }
    catch(Exception){
        alert("error");
    }
}

function gestioneprenotazioniADMIN(){
    try{
        document.getElementById("paginainiziale").style.display="none";
        document.getElementById("listaprenotazioni").style.display="none";
        document.getElementById("prenotazione").style.display="none";
        document.getElementById("gestioneprenotazioni").style.display="none";

        /*document.getElementById("table").remove();
        document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");*/

        document.getElementById("gestioneprenotazioniADMIN").style.display="inline-block"; 
    }
    catch(Exception){
        alert("error");
    }
}

function viewAdvanceSearch(){
    document.getElementById("advanceSearchDiv").style.display="inline"; 
    document.getElementById("filtroTabella").value="";
    searchOnTable();
    document.getElementById("genericSearch").style.display="none";
    document.getElementById("advanceSearchBut").style.display="none";
}

function hiddenAdvanceSearch(){
    searchOnTable();
    document.getElementById("advanceSearchBut").style.display="inline"; 
    document.getElementById("genericSearch").style.display="inline";
    document.getElementById("advanceSearchDiv").style.display="none";
}
function viewAdvanceSearch2(){
    document.getElementById("advanceSearchDiv2").style.display="inline"; 
    document.getElementById("filtroTabella2").value="";
    searchOnTable2();
    document.getElementById("genericSearch2").style.display="none";
    document.getElementById("advanceSearchBut2").style.display="none";
}

function hiddenAdvanceSearch2(){
    searchOnTable2();
    document.getElementById("advanceSearchBut2").style.display="inline"; 
    document.getElementById("genericSearch2").style.display="inline";
    document.getElementById("advanceSearchDiv2").style.display="none";
}