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

        creaTabella();
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

        document.getElementById("nulldescrerr").setAttribute("hidden", "true");
        document.getElementById("nulltipologiaerr").setAttribute("hidden", "true");
        document.getElementById("nullquantitaerr").setAttribute("hidden", "true");
        document.getElementById("nulldataerr").setAttribute("hidden", "true");
        document.getElementById("nulloraerr").setAttribute("hidden", "true");

        document.getElementById("descrizioneOrdine").value=null;
        document.getElementById("tipologia").value=null;
        document.getElementById("quantita").value=null;
        document.getElementById("data").value=null;
        document.getElementById("ora").value=null;

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

function viewAdvanceSearch(){
    document.getElementById("advanceSearchDiv").removeAttribute("hidden"); 
    document.getElementById("filtroTabella").value="";
    searchOnTable();
    document.getElementById("genericSearch").setAttribute("hidden", "true");
    document.getElementById("advanceSearchBut").setAttribute("hidden", "true");
}

function hiddenAdvanceSearch(){
    searchOnTable();
    document.getElementById("advanceSearchBut").removeAttribute("hidden"); 
    document.getElementById("genericSearch").removeAttribute("hidden");
    document.getElementById("advanceSearchDiv").setAttribute("hidden", "true");
}