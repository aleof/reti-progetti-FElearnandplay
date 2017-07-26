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
            document.getElementById("nulldescrerr").style.display="inline-block";
            prenota=false;
        }else
            document.getElementById("nulldescrerr").style.display="none";
        if(tipologia==""){
            document.getElementById("nulltipologiaerr").style.display="inline-block";
            prenota=false;
        }else
            document.getElementById("nulltipologiaerr").style.display="none";
        if(quantita=="" || quantita==0){
            document.getElementById("nullquantitaerr").style.display="inline-block";
            prenota=false;
        }else
            document.getElementById("nullquantitaerr").style.display="none";
        if(data==""){
            document.getElementById("nulldataerr").style.display="inline-block";
            
            prenota=false;
        }//limitazione ai giorni
        else
            document.getElementById("nulldataerr").style.display="none";
        if(ora==""){
            document.getElementById("nulloraerr").style.display="inline-block";
            prenota=false;
        }//orario indicato  
        else
            document.getElementById("nulloraerr").style.display="none";
        if(prenota){
            var merce = {utente:sessionStorage.getItem("User"), descrizioneOrdine:descr, tipologia:tipologia,
                     quantita:quantita, data:data, ora:ora};    
            merciA.push(merce);
            localStorage.merci = JSON.stringify(merciA);  

            document.getElementById("prenotazioneeffettuata").style.display="inline-block"; 
            document.getElementById("descrizioneOrdine").value=null;
            document.getElementById("tipologia").value=null;
            document.getElementById("quantita").value=null;
            document.getElementById("data").value=null;
            document.getElementById("ora").value=null;
        }else{   
            if(!document.getElementById("prenotazioneeffettuata").style.display=="inline-block")
                document.getElementById("prenotazioneeffettuata").style.display="none";
        }
    }
    catch(Exception){
        alert("error");
    }
}