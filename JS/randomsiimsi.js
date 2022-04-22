let allHref = ["resultrandomsiimsi/resultrandomsiimsi1.html", "resultrandomsiimsi/resultrandomsiimsi2.html", "resultrandomsiimsi/resultrandomsiimsi3.html",
    "resultrandomsiimsi/resultrandomsiimsi4.html", "resultrandomsiimsi/resultrandomsiimsi5.html", "resultrandomsiimsi/resultrandomsiimsi6.html", "resultrandomsiimsi/resultrandomsiimsi7.html",
    "resultrandomsiimsi/resultrandomsiimsi8.html", "resultrandomsiimsi/resultrandomsiimsi9.html", "resultrandomsiimsi/resultrandomsiimsi10.html", "resultrandomsiimsi/resultrandomsiimsi11.html",
    "resultrandomsiimsi/resultrandomsiimsi12.html", "resultrandomsiimsi/resultrandomsiimsi13.html", "resultrandomsiimsi/resultrandomsiimsi14.html", "resultrandomsiimsi/resultrandomsiimsi15.html",
    "resultrandomsiimsi/resultrandomsiimsi16.html", "resultrandomsiimsi/resultrandomsiimsi17.html", "resultrandomsiimsi/resultrandomsiimsi18.html", "resultrandomsiimsi/resultrandomsiimsi19.html",
    "resultrandomsiimsi/resultrandomsiimsi20.html", "resultrandomsiimsi/resultrandomsiimsi21.html"];
let shakeSiimsi = document.getElementById("shakeSiimsi");
shakeSiimsi.addEventListener("click", function () {
    let siimsiBox = document.getElementById("siimsiBox");
    siimsiBox.className = "shakeSiimsi";
    let count = allHref.length;
    setTimeout(() => {
        let index = Math.floor(Math.random() * count);
        let href = allHref[index];
        siimsiBox.className = "";
        window.location = href;
    }, 1000);
});