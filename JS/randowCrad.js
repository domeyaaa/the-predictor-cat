let countShuffle = 0;
let allHref = ["resultrandom/resultrandom1.html", "resultrandom/resultrandom2.html", "resultrandom/resultrandom3.html", "resultrandom/resultrandom4.html", "resultrandom/resultrandom5.html", "resultrandom/resultrandom6.html", "resultrandom/resultrandom7.html", "resultrandom/resultrandom8.html", "resultrandom/resultrandom9.html", "resultrandom/resultrandom10.html", "resultrandom/resultrandom11.html", "resultrandom/resultrandom12.html", "resultrandom/resultrandom13.html", "resultrandom/resultrandom14.html", "resultrandom/resultrandom15.html", "resultrandom/resultrandom16.html", "resultrandom/resultrandom17.html", "resultrandom/resultrandom18.html", "resultrandom/resultrandom19.html", "resultrandom/resultrandom20.html","resultrandom/resultrandom21.html"];
function newRandom() {
    let reloadCard = document.getElementById("reloadCard");
    reloadCard.style.opacity = "0.5";
    countShuffle++
    if (countShuffle == 1) {
        let hrefSelected = document.getElementById("hrefSelected");
        hrefSelected.setAttribute("href", "#");
        let btnConfirm = document.getElementById("confirm");
        btnConfirm.style.opacity = "0.5";
        btnConfirm.style.backgroundColor ="white";
        let allYibseecard = document.getElementById('all_yibseecard');
        allYibseecard.innerHTML = "";
        let randomHref = allHref;
        let count = randomHref.length;
        
        for (let i = 0; i < allHref.length; i++) {
            let delay = i * 200;
            let index = Math.floor(Math.random() * count);
            let href = randomHref[index];
            for (let j = index; j <= count - 2; j++) {
                randomHref[j] = randomHref[j + 1];
            }
            count--;
            setTimeout(() => {
                allYibseecard.innerHTML += '<div id = "card' + i + '" ' + 'class="yibseecard"' + 'onclick="selectCrad(' + i + ')"' + 'href = "' + href + '" ><img src="../IMG/backCard.PNG" alt="yibseecard"></div>';
            }, delay);
            setTimeout(() => {
                reloadCard.style.opacity = "1";
                return countShuffle = 0;
            }, 4150);
        }
    }
};

let selected = -1;
function selectCrad(i) {
    let name = "card" + i;
    let card = document.getElementById(name);
    let href = card.getAttribute("href");
    let hrefSelected = document.getElementById("hrefSelected");
    hrefSelected.setAttribute("href", href);
    card.style.boxShadow = "0 5px 10px fuchsia"
    card.style.marginTop = "-2px";
    let btnConfirm = document.getElementById("confirm");
    btnConfirm.style.opacity = "1";
    for (let n = 0; n < 21; n++) {
        if (n != i) {
            let nameOther = "card" + n;
            let cardOther = document.getElementById(nameOther);
            cardOther.style.boxShadow = "";
            cardOther.style.marginTop = "";
        };
    };
    if (i == selected) {
        btnConfirm.style.opacity = "0.5";
        
        card.style.boxShadow = "";
        card.style.marginTop = "";
        hrefSelected.setAttribute("href", "#");
        return selected = -1;
    } else {
        return selected = i;
    }
}

 