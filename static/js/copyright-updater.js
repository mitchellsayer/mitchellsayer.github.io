
var element_name = "ucaan-copyright-text";

function main() {
    var d = new Date();
    var year = d.getFullYear();
    var copyright = document.getElementById(element_name);
    copyright.innerHTML = "&copy; "+year+" United Cancer Advocacy Action Network. All Rights Reserved.";
}

main();