window.onload = function() {
    //date
    var d = new Date();
    document.getElementById("dateHeure").innerHTML = "Page affich&eacute;e le: " + " <br/> " + d.getUTCDate() + "/" + eval(d.getUTCMonth() + 1) + "/" + d.getFullYear() + " &agrave; " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
window.onscroll = function() {



}
window.onscroll = function() {
    var userScroll = document.documentElement.scrollTop;
    var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (userScroll / totalHeight) * 100;
    document.body.style.backgroundColor = 'rgba(' + (255 - scrolled * .73) + ', ' + (255 - scrolled * 2.27) + "," + (255 - scrolled * 2.27) + "," + (0.3) + ")";
    document.getElementById("imgConteneur").style.left = scrolled + "%";
    document.getElementById("progression").style.width = scrolled + "%";
}