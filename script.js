let dab = 0
let gatheredInfo = [];
let infoMap = new Map();
let infoMapTotal = 0
function getElement(element){
    desiredElement = document.getElementById(`${element.name}`);
    let value = ""
    if(desiredElement.value)
        value = desiredElement.value;
    
    return value;
}

function getInfo(){
    let nombreV = getElement(nombre);
    let emailV = getElement(email);
    let telefonoV = getElement(telefono);
    let gustosV = getElement(gustos);
    console.log(nombreV)
    gatheredInfo.push({
        nombre:nombreV,
        email:emailV,
        telefono:telefonoV,
        gustos:gustosV
    })
    if(infoMap.has(gustosV)){
        infoMap.set(gustosV, infoMap.get(gustosV)+1);
        infoMapTotal+=1;
        console.log("key encountered procceding");
    }
    else{
        console.log("key not encountered procceding");
        infoMap.set(gustosV, 1);
        infoMapTotal+=1;
        addRow(gustosV);
    }
    refreshTable();
    console.log(gatheredInfo)
    console.log(infoMap)
}

function handleDeezNutz(){
    getInfo()
}

function addRow(nombre) {
    var table = document.getElementById("myTable");
    let numb = Math.round((infoMap.get(nombre)/infoMapTotal )*100)
    const newHTML = `<tr id="${nombre}"><td>${nombre}</td><td>${numb}</td><td>DAB</td></tr>`;
    table.innerHTML += newHTML;
}

function refreshTable(){
    console.log("called refresh table")
    for(const item of infoMap.keys()){
        let numb = Math.round((infoMap.get(item)/infoMapTotal )*100)
        document.getElementById(item).innerHTML = `<tr id="${item}"><td>${item}</td><td>${numb}</td><td>DAB</td></tr>`
    }
}

document.getElementById("pruebas").innerHTML = "<h1>ALL GOOD</h1>"