function create_tr(){
    var tr = document.createElement("tr");
    return tr; 
}
function create_th(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function create_td(tagname,content){
var ele = document.createElement(tagname);
ele.innerHTML = content;
return ele;
}


var table= document.createElement("table");
table.className = "table"

var thead = document.createElement("thead")
thead.className = "thead-dark"

var thead_tr = create_tr();

var th1 = create_th("th","scope","col","#");
var th2 = create_th("th","scope","col","first");
var th3  = create_th("th","scope","col","last");
var th4 = create_th("th","scope","col","handle");

thead_tr.append(th1,th2,th3,th4)
thead.append(thead_tr)

var tbody = document.createElement("tbody");
var body_tr_1 = create_tr();
var body_th_1 = create_th("th","scope","row","1");
var td1 = create_td("td","mark")
var td2 = create_td("td","otto")
var td3 = create_td("td","@otto")

body_tr_1.append(body_th_1,td1,td2,td3);
tbody.append(body_tr_1);

var body_tr_2 = create_tr();
var body_th_2 = create_th("th","scope","row","2");
var td1 = create_td("td","Jacob")
var td2 = create_td("td","Thornton")
var td3 = create_td("td","@fat")

body_tr_2.append(body_th_2,td1,td2,td3);
tbody.append(body_tr_2);

var body_tr_3 = create_tr();
var body_th_3 = create_th("th","scope","row","3");
var td1 = create_td("td","Larry")
var td2 = create_td("td","the Bird")
var td3 = create_td("td","@twitter")

body_tr_3.append(body_th_3,td1,td2,td3);
tbody.append(body_tr_3);


table.append(thead,tbody)
document.body.append(table)