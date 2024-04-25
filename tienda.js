function cuenta(){
   var bebidas=confirm("desea comprar bebidas")
   var comida
   var betot=0;
   if(bebidas==true){
    var be=prompt("1.:fuze tea 2.:Arizona 3.:coca")
   switch(be){
    case "1": betot=20+0; 
    break;
    case "2": betot=23+0; 
    break;
    case "3": betot=25+0; 
    break;
    default: alert("no existe")
   break;
}
}
else 
{ alert("espero que para la siguiente compre") }

comida=confirm("desea comprar comida")
var comtot=0;
if(comida==true){
 var co=prompt("1.:nachos 2.:Nito 3.:chokis")
switch(co){
 case "1": comtot=30+0; 
 break;
 case "2": comtot=10+0; 
 break;
 case "3": comtot=17+0; 
 break;
 default: alert("no existe")
break;
}
}

var tot;
tot=comtot+betot;
alert("su total es de: "+tot)
}


