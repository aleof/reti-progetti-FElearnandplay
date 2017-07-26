/**
 * 
 * Filtri
 * 
 */

function searchOnTable() {
    var filtroQuantita = document.getElementById("filtroQuantita").value.toUpperCase();
    var filtroTipologia = document.getElementById("filtroTipologia").value.toUpperCase();

    var filter = document.getElementById("filtroTabella").value.toUpperCase(); 

    var array = JSON.parse(localStorage.getItem("merci"));
    var result= {utente:"", descrizioneOrdine:"", tipologia:"", quantita:"", data:"", ora:""}; 
    var arrayresult= [];    

    if(filtroQuantita!=="" || filtroTipologia!==""){
        for(var i = 0; i<array.length; i++){
            if((array[i].tipologia.toUpperCase()===filtroTipologia || filtroTipologia==="")
                && (array[i].quantita.toUpperCase()===filtroQuantita || filtroQuantita==="")
                /*&&*/){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }
        }
        document.getElementById("filtroQuantita").value="";
        document.getElementById("filtroTipologia").value="";
    }
    else{
        for(var i = 0; i<array.length; i++){
            if(array[i].tipologia.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }else if(array[i].descrizioneOrdine.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }
            else if(array[i].quantita.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }
            else if(array[i].data.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }else if(array[i].ora.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }
        }
    }
    creaTabella(arrayresult);
}
function searchOnTable2() {
    var filtroQuantita = document.getElementById("filtroQuantita2").value.toUpperCase();
    var filtroTipologia = document.getElementById("filtroTipologia2").value.toUpperCase();

    var filter = document.getElementById("filtroTabella2").value.toUpperCase(); 

    var array = JSON.parse(localStorage.getItem("merci"));
    var result= {utente:"", descrizioneOrdine:"", tipologia:"", quantita:"", data:"", ora:""}; 
    var arrayresult= [];    

    if(filtroQuantita!=="" || filtroTipologia!==""){
        for(var i = 0; i<array.length; i++){
            if((array[i].tipologia.toUpperCase()===filtroTipologia || filtroTipologia==="")
                && (array[i].quantita.toUpperCase()===filtroQuantita || filtroQuantita==="")
                /*&&*/){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }
        }
        document.getElementById("filtroQuantita2").value="";
        document.getElementById("filtroTipologia2").value="";
    }
    else{
        for(var i = 0; i<array.length; i++){
            if(array[i].tipologia.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }else if(array[i].descrizioneOrdine.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }
            else if(array[i].quantita.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }
            else if(array[i].data.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }else if(array[i].ora.toUpperCase().indexOf(filter)!== -1){
                arrayresult.push(creaUtente(array[i]));
                continue;
            }
        }
    }
    creaTabellaGestione(arrayresult);
}

function creaUtente(obj){
    var result = {utente:"", descrizioneOrdine:"", tipologia:"", quantita:"", data:"", ora:""};
    result.utente=sessionStorage.getItem("User");//creaUtente(){}
    result.descrizioneOrdine=obj.descrizioneOrdine;
    result.tipologia=obj.tipologia;
    result.quantita=obj.quantita;
    result.data=obj.data;
    result.ora=obj.ora;
    return result;
    //arrayresult.push(result);
}

/**
 * 
 * Utility
 * 
 */

function hidden(value){
    document.getElementById(value).style.display="none";
}

function show(value){
    document.getElementById(value).style.display="inline-block";
}

function deleteRow(i){//"gotoNode(\'' + result.name + '\')"
    var array;
    //cancella elemento
    selectrow(i); //perchè in debug funzione e fuori dal debug no?

    if(confirm("Sei sicuro di voler eliminare l'elemento selezionato?")){
        array = JSON.parse(localStorage.getItem("merci"));
        array.splice(i,1);
        localStorage.merci = JSON.stringify(array);
        creaTabellaGestione(array);
    }
    else 
        document.getElementById(i).setAttribute("class", "tdbutton"); 
}

function selectrow(i){
    document.getElementById(i).setAttribute("class", "rowselected");
}

function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}

function rows(value, tr, int, i){
    var td = document.createElement("td");
    
    switch(int){
        case 1:
            td.setAttribute("class","td tdtext");
            tr.appendChild(td).innerHTML=value;
            break;
        case 2:
            td.setAttribute("class","td tdnum");
            tr.appendChild(td).innerHTML=value;
            break;
        case 3:
            td.setAttribute("class","td tdtext");
            tr.appendChild(td).innerHTML=value;
            break;
        case 4:
            td.setAttribute("class","td tddataora");
            tr.appendChild(td).innerHTML=value;
            break;
        case 5:
            td.setAttribute("class","td tddataora");
            tr.appendChild(td).innerHTML=value;
            break;
        case 6:
        case 7:
        case 8:
            var image = document.createElement("img");            
            td.setAttribute("class","buttonColumn");
            image.setAttribute("class", "buttonManagerTable");
            if(int==8){
                image.setAttribute("src", "../img/delete.png");
                image.setAttribute("title", "Elimina record");
                image.setAttribute("onclick", "deleteRow(" + i + ")");//"gotoNode(\'' + result.name + '\')"
            }else if(int==6){
                image.setAttribute("src", "../img/modifica.png");
                image.setAttribute("title", "Modifica record");
                image.setAttribute("onclick", "creaTabellaModifica(undefined," + i + ")");//"gotoNode(\'' + result.name + '\')"
            }/*else if(int==7){
                image.setAttribute("src", "../img/conferma-invio.png");
                image.setAttribute("title", "Conferma Modifica");
                //image.setAttribute("onclick", "deleteRow(" + i + ")");//"gotoNode(\'' + result.name + '\')"
            }*/
            tr.appendChild(td);
            td.appendChild(image).innerHTML=value;
            tr.setAttribute("id", i);
            break;
        case 0:
            var button = document.createElement("button");
            button.setAttribute("class", "buttonDelete")
            //tr.appendChild(td).innerHTML=value;
            tr.appendChild(button).innerHTML=value;
            tr.setAttribute("id", i);
            //button.setAttribute("onclick", "deleteRow(" + i + ")");//"gotoNode(\'' + result.name + '\')"
            //<img id="deleteButton" class="deleteButton" src="../img/delete.png" title="Elimina record" onclick="">
            break;
    }
}

function rowsInput(value, tr, int, i){
    var td = document.createElement("td");
    var input = document.createElement("input");
    
    switch(int){
        case 1:
            td.setAttribute("class","td tdtext");
            tr.appendChild(td);
            input.setAttribute("id", "do");//aggiungi l'id
            td.appendChild(input).value=value;
            break;
        case 2:
            td.setAttribute("class","td tdnum");
            tr.appendChild(td);
            input.setAttribute("id", "q");
            td.appendChild(input).value=value;
            break;
        case 3:
            td.setAttribute("class","td tdtext");
            tr.appendChild(td);
            input.setAttribute("id", "t");
            td.appendChild(input).value=value;
            break;
        case 4:
            td.setAttribute("class","td tddataora");
            tr.appendChild(td);
            input.setAttribute("id", "d");
            td.appendChild(input).value=value;
            break;
        case 5:
            td.setAttribute("class","td tddataora");
            tr.appendChild(td);
            input.setAttribute("id", "o");
            td.appendChild(input).value=value;
            break;
        case 9:
        case 7:
        case 8:
            var image = document.createElement("img");            
            td.setAttribute("class","buttonColumn");
            image.setAttribute("class", "buttonManagerTable");
            /*if(int==8){
                image.setAttribute("src", "../img/delete.png");
                image.setAttribute("title", "Elimina record");
                image.setAttribute("onclick", "deleteRow(" + i + ")");//"gotoNode(\'' + result.name + '\')"*/
            if(int==9){
                image.setAttribute("src", "../img/conferma-invio.png");
                image.setAttribute("title", "Conferma Modifica");
                image.setAttribute("onclick", "conferma(" + i + ")");//"gotoNode(\'' + result.name + '\')"
            }else if(int==7){
                image.setAttribute("src", "../img/annulla.png");
                image.setAttribute("title", "Annulla Modifica");
                image.setAttribute("onclick", "modifica(" + i + ")");//"gotoNode(\'' + result.name + '\')"
            }
            tr.appendChild(td);
            td.appendChild(image).innerHTML=value;
            tr.setAttribute("id", i);
            break;
        case 0:
            var button = document.createElement("button");
            button.setAttribute("class", "buttonDelete")
            //tr.appendChild(td).innerHTML=value;
            tr.appendChild(button).innerHTML=value;
            tr.setAttribute("id", i);
            //button.setAttribute("onclick", "deleteRow(" + i + ")");//"gotoNode(\'' + result.name + '\')"
            //<img id="deleteButton" class="deleteButton" src="../img/delete.png" title="Elimina record" onclick="">
            break;
    }
}

function headerRows(value, tr, int, array){
    var th = document.createElement("th");
    th.setAttribute("class", "th");
    th.setAttribute("onclick", ("ordina("+int+")"));
    tr.appendChild(th).innerHTML=value;
}

var arrayordinamento= [];
function ordina(column){
    /**/
    switch(column){
        case 1:
            var str = "descrizioneOrdine";
            break;
        case 2:
            var str = "quantita";
            break;
        case 3:
            var str = "tipologia";
            break;
        case 4:
            var str = "data";
            break;
        case 5:
            var str = "ora";
            break;
    }

    if(str=="quantita")
        arrayordinamento.sort(function(a, b) { return (a.quantita-b.quantita); });//sort di interi
    else 
        arrayordinamento.sort(function(a, b) { return (a[str]>b[str]) ? 1 : ((a[str]<b[str]) ? -1 : 0); });//sort di tutto ciò che non è intero
    //1 boolean   -> True 
    //0 boolean   -> False
    //NEG boolean -> True
    //>1 <-1asc&&<1>-1desc
    
    creaTabella(arrayordinamento);
}

function creaTabella(search){
    document.getElementById("table").remove();
    document.getElementById("divtable").appendChild(document.createElement("table")).setAttribute("id", "table");

    var count = 0;
    var array;
    var table = document.getElementById("table");
    var tr = document.createElement("tr");

    table.setAttribute("class", "table");
    tr.setAttribute("class", "tr");

    if(search===undefined){
        array = JSON.parse(localStorage.getItem("merci"));
        arrayordinamento = array;
    }
    else{
        array = search;
        arrayordinamento = array;
    }

    table.appendChild(tr);
    headerRows("Descrizione", tr, 1, array);
    headerRows("Quantita" , tr, 2, array); //parseInt(array[i].quantita,10);
    headerRows("Tipologia", tr, 3, array);
    headerRows("Data",tr, 4, array);
    headerRows("Ora", tr, 5, array);
    //rows("", tr, 0, i);//cancella 

    for(var i=0; i<array.length; i++){
        if(array[i].utente==sessionStorage.getItem("User")){
            var tr = document.createElement("tr");
            //tr.style.cssText="";
            table.appendChild(tr);
            rows(array[i].descrizioneOrdine, tr, 1, i);
            rows(array[i].quantita, tr, 2, i); //parseInt(array[i].quantita,10);
            rows(array[i].tipologia, tr, 3, i);
            rows(array[i].data, tr, 4, i);
            rows(array[i].ora, tr, 5, i);
            rows("", tr, 0, i);//cancella 
            count++;
        }
    }
    document.getElementById("quantitalista").innerHTML="Quantita prenotazioni: "+count;
}

function creaTabellaGestione(search){
    document.getElementById("gestable").remove();
    document.getElementById("divgestable").appendChild(document.createElement("table")).setAttribute("id", "gestable");

    var count = 0;
    var array;
    var table = document.getElementById("gestable");
    var tr = document.createElement("tr");

    table.setAttribute("class", "table");
    tr.setAttribute("class", "tr");

    if(search===undefined){
        array = JSON.parse(localStorage.getItem("merci"));
        arrayordinamento = array;
    }
    else{
        array = search;
        arrayordinamento = array;
    }

    table.appendChild(tr);
    headerRows("Descrizione", tr, 1, array);
    headerRows("Quantita" , tr, 2, array); //parseInt(array[i].quantita,10);
    headerRows("Tipologia", tr, 3, array);
    headerRows("Data",tr, 4, array);
    headerRows("Ora", tr, 5, array);
    //rows("", tr, 0, i);//cancella
    /**aggiungi colonna del cancella prenotazione */

    for(var i=0; i<array.length; i++){
        if(array[i].utente==sessionStorage.getItem("User")){
            var tr = document.createElement("tr");
            //tr.style.cssText="";
            table.appendChild(tr);
            rows(array[i].descrizioneOrdine, tr, 1, i);
            rows(array[i].quantita, tr, 2, i); //parseInt(array[i].quantita,10);
            rows(array[i].tipologia, tr, 3, i);
            rows(array[i].data, tr, 4, i);
            rows(array[i].ora, tr, 5, i);
            rows("", tr, 6, i);//modifica
            //rows("", tr, 7, i);//conferma modifca
            rows("", tr, 8, i);//cancella          
            count++;
        }
    }
    document.getElementById("gesquantitalista").innerHTML="Quantita prenotazioni: "+count;
}

function creaTabellaModifica(search, modifica){
    document.getElementById("gestable").remove();
    document.getElementById("divgestable").appendChild(document.createElement("table")).setAttribute("id", "gestable");

    var count = 0;
    var array;
    var table = document.getElementById("gestable");
    var tr = document.createElement("tr");

    table.setAttribute("class", "table");
    tr.setAttribute("class", "tr");

    if(search===undefined){
        array = JSON.parse(localStorage.getItem("merci"));
        arrayordinamento = array;
    }
    else{
        array = search;
        arrayordinamento = array;
    }

    table.appendChild(tr);
    headerRows("Descrizione", tr, 1, array);
    headerRows("Quantita" , tr, 2, array); //parseInt(array[i].quantita,10);
    headerRows("Tipologia", tr, 3, array);
    headerRows("Data",tr, 4, array);
    headerRows("Ora", tr, 5, array);
    /**aggiungi colonna del cancella prenotazione */

    for(var i=0; i<array.length; i++){
        if(modifica===i){
            var tr = document.createElement("tr");
            //tr.style.cssText="";
            table.appendChild(tr);
            rowsInput(array[i].descrizioneOrdine, tr, 1, i);
            rowsInput(array[i].quantita, tr, 2, i); //parseInt(array[i].quantita,10);
            rowsInput(array[i].tipologia, tr, 3, i);
            rowsInput(array[i].data, tr, 4, i);
            rowsInput(array[i].ora, tr, 5, i);
            rowsInput("", tr, 7, i);//conferma modifca
            rowsInput("", tr, 9, i);//annulla          
            count++;
        }
        else if(array[i].utente==sessionStorage.getItem("User")){
            var tr = document.createElement("tr");
            //tr.style.cssText="";
            table.appendChild(tr);
            rows(array[i].descrizioneOrdine, tr, 1, i);
            rows(array[i].quantita, tr, 2, i); //parseInt(array[i].quantita,10);
            rows(array[i].tipologia, tr, 3, i);
            rows(array[i].data, tr, 4, i);
            rows(array[i].ora, tr, 5, i);
            rows("", tr, 6, i);//modifica
            //rows("", tr, 7, i);//conferma modifca
            rows("", tr, 8, i);//cancella          
            count++;
        }
    }
    document.getElementById("gesquantitalista").innerHTML="Quantita prenotazioni: "+count;
}

/*function creaTabellaGestioneAdmin(search){
    document.getElementById("admingestable").remove();
    document.getElementById("admindivgestable").appendChild(document.createElement("table")).setAttribute("id", "table");

    var count = 0;
    var array;
    var table = document.getElementById("table");
    var tr = document.createElement("tr");

    table.setAttribute("class", "table");
    tr.setAttribute("class", "tr");

    if(search===undefined){
        array = JSON.parse(localStorage.getItem("merci"));
        arrayordinamento = array;
    }
    else{
        array = search;
        arrayordinamento = array;
    }

    table.appendChild(tr);
    headerRows("Descrizione", tr, 1, array);
    headerRows("Quantita" , tr, 2, array); //parseInt(array[i].quantita,10);
    headerRows("Tipologia", tr, 3, array);
    headerRows("Data",tr, 4, array);
    headerRows("Ora", tr, 5, array);
    /**aggiungi colonna del cancella prenotazione 

    for(var i=0; i<array.length; i++){
        if(array[i].utente==sessionStorage.getItem("User")){
            var tr = document.createElement("tr");
            //tr.style.cssText="";
            table.appendChild(tr);
            rows(array[i].descrizioneOrdine, tr, 1, i);
            rows(array[i].quantita, tr, 2, i); //parseInt(array[i].quantita,10);
            rows(array[i].tipologia, tr, 3, i);
            rows(array[i].data, tr, 4, i);
            rows(array[i].ora, tr, 5, i);
            //admin: approva modifica, approva eliminazione
            count++;
        }
    }
    document.getElementById("gesquantitalista").innerHTML="Quantita prenotazioni: "+count;
}*/

function modifica(i){
    array = JSON.parse(localStorage.getItem("merci"));
    var desc = array[i].descrizioneOrdine;
    var q = array[i].quantita;
    var t = array[i].tipologia;
    var d = array[i].data;
    var o = array[i].ora;
    creaTabellaModifica(array, modifica);
}
function conferma(i){
    var array = []
    array = JSON.parse(localStorage.getItem("merci"));
    
    array[i].descrizioneOrdine = document.getElementById("do").value;
    array[i].quantita = document.getElementById("q").value;
    array[i].tipologia = document.getElementById("t").value;
    array[i].data = document.getElementById("d").value;
    array[i].ora = document.getElementById("o").value;

    localStorage.merci = JSON.stringify(array);

    creaTabellaGestione(array);
}
function annulla(i){
    array = JSON.parse(localStorage.getItem("merci"));
    creaTabellaGestione(array);
}