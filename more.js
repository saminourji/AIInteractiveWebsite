window.onload = function() {
    //date
    var d = new Date();
    document.getElementById("dateHeure").innerHTML = "Page affich&eacute;e le: " + " <br/> " + d.getUTCDate() + "/" + eval(d.getUTCMonth() + 1) + "/" + d.getFullYear() + " &agrave; " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}