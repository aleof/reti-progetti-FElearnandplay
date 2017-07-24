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
    document.getElementById(value).setAttribute("hidden", "true");
}

function show(value){
    document.getElementById(value).removeAttribute("hidden");
}

function deleteRow(i){//"gotoNode(\'' + result.name + '\')"
    var array;
    //cancella elemento
    selectrow(i); //perchè in debug funzione e fuori dal debug no???????????????

    if(confirm("Sei sicuro di voler eliminare l'elemento selezionato?")){
        array = JSON.parse(localStorage.getItem("merci"));
        array.splice(i,1);
        localStorage.merci = JSON.stringify(array);
        creaTabella(array);
    }
    else 
        document.getElementById(i).setAttribute("class", "td");
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
            break;
        case 2:
            td.setAttribute("class","td tdnum");
            break;
        case 3:
            td.setAttribute("class","td tdtext");
            break;
        case 4:
            td.setAttribute("class","td tddataora");
            break;
        case 5:
            td.setAttribute("class","td tddataora");
            break;
        case 6:
            td.setAttribute("class","buttonColumn");
            break;
    }
    
    if(int===6){
        var button = document.createElement("button");
        button.setAttribute("class", "buttonDelete")
        //tr.appendChild(td).innerHTML=value;
        tr.appendChild(button).innerHTML=value;
        tr.setAttribute("id", i);
        button.setAttribute("onclick", "deleteRow(" + i + ")");//"gotoNode(\'' + result.name + '\')"
    }else 
        tr.appendChild(td).innerHTML=value;
}
function headerRows(value, tr, int, array){
    var th = document.createElement("th");
    th.setAttribute("class", "th");
    th.setAttribute("onclick", ("ordina("+int+")"));
    tr.appendChild(th).innerHTML=value;
}
var arrayordinamento= [];
function ordina(x){
    /**/
    switch(x){
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
    /*DA SISTEMARE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    //aggiungi campo id!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! usa delle mappe
    var arr=[];

    for(var i=0; i<arrayordinamento.length; i++){
        if(str=="quantita")
            arr.push(parseInt(arrayordinamento[i][str]));
        else
            arr.push(arrayordinamento[i][str]);
    }

    if(str=="quantita")
        arr.sort(function(a, b) {return(a-b)});//sort di interi
    else 
        arr.sort();//sort di tutto ciò che non è intero
    
    var result = [];
    for(var l=0; l<arr.length;l++){
        for(var j=0; j<arrayordinamento.length; j++){
            if(arr[l]==arrayordinamento[j][str]){//i tipi sono diversi 
                result.push(arrayordinamento[j]);
                arrayordinamento.splice(j, 1);
                break;
            }
        }
    }
    creaTabella(result);

    result=[];
    arr=[];
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
            rows("X", tr, 6, i);
            count++;
        }
    }
    document.getElementById("quantitalista").innerHTML="Quantita prenotazioni: "+count;
}