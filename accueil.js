//date
window.onload = function() {
    diaporama(1);
    var d = new Date();
    document.getElementById("dateHeure").innerHTML = "Page affich&eacute;e le: " + " <br/> " + d.getUTCDate() + "/" + eval(d.getUTCMonth() + 1) + "/" + d.getFullYear() + " &agrave; " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

//fade couleur section milieux
window.onscroll = function() {

    var userScroll = document.documentElement.scrollTop;
    var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (userScroll / totalHeight) * 100;
    if (scrolled >= 50) {
        document.getElementById("middle").style.backgroundColor = 'rgb(' + (255 - (scrolled - 50) * 2 * 2.55) + ', ' + (255 - (scrolled - 50) * 2 * 2.41) + "," + (255 - (scrolled - 50) * 2 * 2.07) + ")";
    } else if (scrolled < 50) {
        document.getElementById("middle").style.backgroundColor = 'rgb(' + (0 + (scrolled) * 2 * 2.55) + ', ' + (14 + (scrolled) * 2 * 2.41) + "," + (48 + (scrolled) * 2 * 2.07) + ")";
    }
}

//diaporama
var indexDiapo = 1;
if (indexDiapo = 1)

function changeDiapo(n) {
    diaporama(indexDiapo += n)
}

function cetteDiapo(n) {
    diaporama(indexDiapo = n)
}

function diaporama(n) {
    var i;
    var diapos = document.getElementsByClassName("diapos");
    var dots = document.getElementsByClassName("dot");
    var desc = document.getElementsByClassName("desc");
    if (n > diapos.length) {
        indexDiapo = 1;
    } else if (n < 1) {
        indexDiapo = diapos.length;
    }
    for (i = 0; i < diapos.length; i++) {
        diapos[i].style.display = "none";
        desc[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" actif", "");
    }

    diapos[indexDiapo - 1].style.display = "block";
    desc[indexDiapo - 1].style.display = "block";
    dots[indexDiapo - 1].className += " actif";

}