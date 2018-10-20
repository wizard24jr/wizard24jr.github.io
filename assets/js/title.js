if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){loaded();});}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){loaded();});}
function loaded(){setInterval(loop,400);}
var x=0;var titleText=["d","da","dam","dama","damag","damage","damaged","damaged.","damaged.c","damaged.cl","damaged.clu","damaged.club"];function loop(){document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length];}
window.oncontextmenu=function(){console.log("Where do we come from?");return false;}