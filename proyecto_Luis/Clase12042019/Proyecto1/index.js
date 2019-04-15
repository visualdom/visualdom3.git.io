function genera_tabla(arreglo) {
  var body = document.getElementsByTagName("body")[0];
 
  var tabla   = document.createElement("table");
  var tblHead = document.createElement("thead");
  var tblBody = document.createElement("tbody");
  var tblFoot = document.createElement("tfoot");
  var hileraHead = document.createElement("tr");
  for (var i = 0 ; i < arreglo.length; i++){
    var celdaHead = document.createElement("th");
    var textoHead = document.createTextNode((Object.keys(arreglo[i]))[i]);
    celdaHead.appendChild(textoHead);
    hileraHead.appendChild(celdaHead);
    tblHead.appendChild(hileraHead);
  }
  for (var i = 0; i < arreglo.length; i++) {
    var hileraBody = document.createElement("tr");
    console.log(Object.keys(arreglo[i]));
    console.log(Object.values(arreglo[i]));
    for (var j = 0; j < (Object.keys(arreglo[i])).length; j++) {
      var celdaBody = document.createElement("td");
      var textoCelda = document.createTextNode((Object.values(arreglo[i]))[j]);
      celdaBody.appendChild(textoCelda);
      hileraBody.appendChild(celdaBody);
    }
 
    tblBody.appendChild(hileraBody);
  }
  tabla.appendChild(tblHead);
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");
}

var personArr = [
{
  "personId": 123,
  "name": "Jhon",
  "city": "Melbourne",
  "phoneNo": "1234567890"
},
{
  "personId": 124,
  "name": "Amelia",
  "city": "Sydney",
  "phoneNo": "1234567890"
},
{
  "personId": 125,
  "name": "Emily",
  "city": "Perth",
  "phoneNo": "1234567890"
},
{
  "personId": 126,
  "name": "Abraham",
  "city": "Perth",
  "phoneNo": "1234567890"
}
]

genera_tabla(personArr);

