var titles = [];
titles = document.querySelectorAll("h4 a");
console.log("***** Printing Titles *****");
for (var i = 0; i < titles.length; i++) {
    console.log(titles[i].innerHTML);
}
console.log("*************");
var dates = [];
dates = document.querySelectorAll("span[class=\"quiet\"]");
console.log("***** Printing Dates *****");
for (var i = 0; i < dates.length; i++) {
    var d = dates[i].innerHTML;
    var value = [];
    value = d.split("-");
    console.log(value[0])
}
console.log("*************");
var links = [];
console.log("***** Printing links *****");
links = document.querySelectorAll("div[class=\"row no-print resultado-pesquisa\"] > a");
for (var i = 0; i < links.length; i++) {
    console.log(links[i].href);
}