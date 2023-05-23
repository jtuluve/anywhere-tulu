const body = document.getElementsByTagName('body')[0];
let div1 = document.createElement('div')
div1.className = 'AT_mainbody'
let style = document.createElement("style")
style.append("@font-face { font-family: 'baravu'; src: url('https://jtuluve.github.io/anywhere-tulu/fonts/Mandara.ttf') format('truetype'); } .AT_mainbody{position: fixed;top:1em;right:1em;width: 28vw;max-width: 169px;padding:0.6vw;background-color:rgb(245 245 245);border-radius:0.5em;filter:drop-shadow(2px 4px 4px black);min-width: 126px;}")
document.getElementsByTagName('head')[0].insertAdjacentElement("afterbegin",style)
div1.style = ""
let div2 = document.createElement('div')
div2.style = "display:flex;"
let img = document.createElement('img')
img.src = 'https://jtuluve.github.io/anywhere-tulu/images/logo.png'
img.style = 'width: 1.5em;margin-right:0.3em;'
let span = document.createElement('span')
span.append("anywhere tulu")
div2.append(img)
div2.append(span)
let div3 = document.createElement('div3')
div3.style = "display: flex;margin-top:0.5em;"
let input = document.createElement('input')
input.id = "_genacheckbox_"
input.type = 'checkbox'
let span2 = document.createElement('span')
span2.append("Tulu Script")
span2.style = "color: #910000;margin-left:min(1vw,25px);font-size: 1em;"
div3.append(input, span2)
div1.append(div2, div3)
body.prepend(div1)

var checkbox = document.getElementById("_genacheckbox_")
checkbox.addEventListener('change', function () {
    if (this.checked) {
        _gena2tulu_()
    } else {
        _gena2org_()
    }
});
var fontFace = "";
var datas = new Map();
function _gena2tulu_() {
    var elements = document.getElementsByClassName("genatulu");
    for (var i = 0; i < elements.length; i++) {
        datas.set("pf" + i, elements[i].style.fontFamily)
        datas.set("p" + i, elements[i].innerHTML)
        elements[i].style.fontFamily = "baravu";

        let txt = elements[i].innerHTML

        txt = _2tulu_(txt)


        elements[i].innerHTML = txt;


    }
}
function _gena2org_() {
    var elements = document.getElementsByClassName("genatulu");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = datas.get("p" + i)
        elements[i].style.fontFamily = datas.get("pf" + i)
    }
}


function _2tulu_(txt) {
    txt = txt.replace(/್‍/g, "ä").replace(/‍/g, "")

    /*Tulu special characters replace*/
    //specail ೆ'
    let E = txt.indexOf("ೆ\*")
    let N = txt.indexOf("ೆ\*")
    let M = 1;
    while (E > -1) {
        while (txt[N - 2] == "್" || txt[N - 2] == "ä") {
            M = M + 2;
            N = N - 2;
        }
        txt = txt.slice(0, E - M) + "o" + txt.slice(E - M, E) + txt.slice(E + 2);
        E = txt.indexOf("ೆ\*")
        N = txt.indexOf("ೆ\*");
        M = 1;
    }


    //special ೇ'
    E = txt.indexOf("ೇ\*");
    N = txt.indexOf("ೇ\*");
    M = 1;
    while (E > -1) {
        while (txt[N - 2] == "್" || txt[N - 2] == "ä") {
            M = M + 2;
            N = N - 2;
        }
        txt = txt.slice(0, E - M) + "O" + txt.slice(E - M, E) + txt.slice(E + 2);
        E = txt.indexOf("ೇ\*")
        N = txt.indexOf("ೇ\*");
        M = 1;
    }

    //Other special characters 
    txt = txt.replace(/ಎ\*/g, "oA").replace(/ಏ\*/g, "OA").replace(/ು\*/g, "uAX");



    //as some functions fails to load when two diacritics are present making it easier to run by replacing diacritics based on the baravu needs..

    txt = txt.replace(/ೈ/g, "ೈ").replace(/ೊೖ/g, "ೖa");

    //replace ೖ with ee
    let e = txt.indexOf("ೖ");
    let n = txt.indexOf("ೖ");
    let m = 1
    while (e > -1) {
        if (/ಾ|ಿ|ೀ|ು|ೂ|ೃ|ೆ|ೇ|ೊ|ೋ|ೌ/.test(txt[e - 1])) {
            n = n - 1;
            m = 2;
        }
        while (txt[n - 2] == "್" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1);

        e = txt.indexOf("ೖ");
        n = txt.indexOf("ೖ");
        m = 1
    }


    /* Baravu requires ೆ to be in the before the letter i.e. ಕೆ = ek where ಕ = k and ೆ = e also ಕ್ಕೆ = ekAk (where ್ = A). We need to find ೆ and change its position to the starting of letter */
    e = txt.indexOf("ೆ");
    n = txt.indexOf("ೆ");
    m = 1;
    while (e > -1) {
        //as we need to find the position where we want to keep ೆ we need to find how many ottaksharas are there in the letter. The following function does that work by going backwards and finding ್.
        while (txt[n - 2] == "್" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        //now replace ೆ with e
        txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("ೆ")
        n = txt.indexOf("ೆ");
        m = 1;
    }

    // replace ೇ with E (position before the letter as in ೆ)
    e = txt.indexOf("ೇ");
    n = txt.indexOf("ೇ");
    m = 1;
    while (e > -1) {
        //as above ೆ function find the position to where the "E" should be placed
        while (txt[n - 2] == "್" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        //replace ೇ with E
        txt = txt.slice(0, e - m) + "E" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("ೇ");
        n = txt.indexOf("ೇ");
        m = 1;
    }




    // replace ೈ with ee (position is strating of the letter as in ೆ)
    e = txt.indexOf("ೈ");
    n = txt.indexOf("ೈ");
    m = 1;
    while (e > -1) {
        while (txt[n - 2] == "್" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("ೈ");
        n = txt.indexOf("ೈ");
        m = 1;
    }


    //to replace ೊ in baravu 'e' should be added in the beginning of the letter and 'a' should be added in the end i.e. ಕೊ =‌ eka and ಕ್ಕೊ = ekAka
    e = txt.indexOf("ೊ");
    n = txt.indexOf("ೊ");
    m = 1;
    while (e > -1) {
        //find the position to where 'e' should be added
        while (txt[n - 2] == "್" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        //replace ೊ with 'e' in the beginning and 'a' in the end 
        txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + "a" + txt.slice(e + 1);
        e = txt.indexOf("ೊ");
        n = txt.indexOf("ೊ");
        m = 1;
    }

    //as in the above ೊ but here 'F' should be added in the beginning of the letter and a should be added in the ending
    //i.e. ಕೋ = Fka and ಕ್ಕೊ = FkAka
    e = txt.indexOf("ೋ");
    n = txt.indexOf("ೋ");
    m = 1;
    while (e > -1) {
        //find the position to where 'e' should be added
        while (txt[n - 2] == "್" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        //replace ೋ with 'F' in the beginning and 'a' in the end 
        txt = txt.slice(0, e - m) + "F" + txt.slice(e - m, e) + "a" + txt.slice(e + 1);
        e = txt.indexOf("ೋ");
        n = txt.indexOf("ೋ");
        m = 1;
    }




    //arka replacing
    //as ್ with zwj has been replaced as 'ä' we can convert the one which hasn't been replaced as 'ä' to arka. In baravu font 'f' should be added after the ottakshara.
    //i.e. ರ್ಕ = kf (note: Here main akshara is ರ and ottakshara is ಕ = k)
    let H = txt.indexOf("ರ್");
    let ra2 = txt[H + 2];
    //run function only if the ottakshara is available 
    while (H > -1) {
        if (/ಕ|ಖ|ಗ|ಘ|ಙ|ಚ|ಛ|ಜ|ಝ|ಞ|ಟ|ಠ|ಡ|ಢ|ಣ|ತ|ಥ|ದ|ಧ|ನ|ಪ|ಫ|ಬ|ಭ|ಮ|ಯ|ಲ|ವ|ಶ|ಷ|ಸ|ಹ|ಳ/.test(ra2) && txt[H - 1] !== "್") {
            //replace arka with 'f'
            txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
            H = txt.indexOf("ರ್");
            ra2 = txt[H + 2];
        } else {
            //if ottakshara is not available just replace ರ್ with 'rA'
            txt = txt.replace("ರ್", "rA");
            H = txt.indexOf("ರ್");
            ra2 = txt[H + 2];
        }
    }



    //replace every other letters and zwnj

    txt = txt.replace(/ಅ/g, "XAA").replace(/ಆ/g, "XAa").replace(/ಇ/g, "XAi").replace(/ಈ/g, "XAI").replace(/ಉ/g, "XAu").replace(/ಊ/g, "XAU").replace(/ಋ/g, "XAR").replace(/ೠ/g, "XARR").replace(/ಎ/g, "eA").replace(/ಏ/g, "EA").replace(/ಐ/g, "eeA").replace(/ಒ/g, "eAa").replace(/ಓ/g, "FAa").replace(/ಔ/g, "XAY").replace(/ಂ/g, "M").replace(/ಃ/g, "H").replace(/ಕ/g, "k").replace(/ಖ/g, "K").replace(/ಗ/g, "g").replace(/ಘ/g, "G").replace(/ಙ/g, "Z").replace(/ಚ/g, "c").replace(/ಛ/g, "C").replace(/ಜ/g, "j").replace(/ಝ/g, "J").replace(/ಞ/g, "z").replace(/ಟ/g, "q").replace(/ಠ/g, "Q").replace(/ಡ/g, "w").replace(/ಢ/g, "W").replace(/ಣ/g, "N").replace(/ತ/g, "t").replace(/ಥ/g, "T").replace(/ದ/g, "d").replace(/ಧ/g, "D").replace(/ನ/g, "n").replace(/ಪ/g, "p").replace(/ಫ/g, "P").replace(/ಬ/g, "b").replace(/ಭ/g, "B").replace(/ಮ/g, "m").replace(/ಯ/g, "y").replace(/ರ/g, "r").replace(/ಲ/g, "l").replace(/ವ/g, "v").replace(/ಶ/g, "S").replace(/ಷ/g, "x").replace(/ಸ/g, "s").replace(/ಹ/g, "h").replace(/ಳ/g, "L").replace(/ೞ/g, "xxzhaxx").replace(/ಱ/g, "xxrhaxx").replace(/್/g, "A").replace(/ಾ/g, "a").replace(/ು/g, "u").replace(/ೂ/g, "U").replace(/ೌ/g, "Y").replace(/ಿ/g, "i").replace(/ೀ/g, "I").replace(/ೃ/g, "R").replace(/‌/g, "X").replace(/‍/g, "").replace(/ä/g, "A").replace(/೧/g, "1").replace(/೨/g, "2").replace(/೩/g, "3").replace(/೪/g, "4").replace(/೫/g, "5").replace(/೬/g, "6").replace(/೭/g, "7").replace(/೮/g, "8").replace(/೯/g, "9").replace(/೦/g, "0");


    /* error manager*/


    let fa = txt.indexOf("fA")
    while (fa > -1) {

        var tt = ["k", "K", "g", "G", "Z", "c", "C", "j", "J", "z", "q", "Q", "w", "W", "N", "t", "T", "d", "D", "n", "p", "P", "b", "B", "m", "y", "r", "l", "v", "S", "x", "s", "h", "L"]

        if (tt.includes(txt[fa + 2])) {

            txt = txt.slice(0, fa) + "fXA" + txt.slice(fa + 2);

        }

        fa = txt.indexOf("fA", fa + 2);
    }

    //malyalam
    txt = txt.replace(/്‍/g, "ä");

    //replace െ* with special െ' of tulu
    E = txt.indexOf("െ\*");
    N = txt.indexOf("െ\*");
    M = 1;
    while (E > -1) {
        while (txt[N - 2] == "്" || txt[N - 2] == "ä") {
            M = M + 2;
            N = N - 2;
        }
        txt = txt.slice(0, E - M) + "o" + txt.slice(E - M, E) + txt.slice(E + 2);
        E = txt.indexOf("െ\*")
        N = txt.indexOf("െ\*");
        M = 1;
    }


    //replace േ* with special േ' of tulu
    E = txt.indexOf("േ\*");
    N = txt.indexOf("േ\*");
    M = 1;
    while (E > -1) {
        while (txt[N - 2] == "്" || txt[N - 2] == "ä") {
            M = M + 2;
            N = N - 2;
        }
        txt = txt.slice(0, E - M) + "O" + txt.slice(E - M, E) + txt.slice(E + 2);
        E = txt.indexOf("േ\*")
        N = txt.indexOf("േ\*");
        M = 1;
    }

    //replace 'എ*' 'ഏ*' with special  of tulu
    txt = txt.replace(/എ\*/g, "oA").replace(/ഏ\*/g, "OA").replace(/ു\*/g, "uAX");




    //as some functions fails to load when two diacritics are present making it easier to run by replacing diacritics based on the baravu needs..

    txt = txt.replace(/െൈ/g, "ൈ").replace(/ൊൈ/g, "ൈa");

    //replace െ with e
    e = txt.indexOf("െ");
    n = txt.indexOf("െ");
    m = 1;
    while (e > -1) {
        while (txt[n - 2] == "്" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("െ")
        n = txt.indexOf("െ");
        m = 1;
    }

    //replace േ with E
    e = txt.indexOf("േ");
    n = txt.indexOf("േ");
    m = 1;
    while (e > -1) {
        while (txt[n - 2] == "്" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "E" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("േ");
        n = txt.indexOf("േ");
        m = 1;
    }

    //replace ൈ with ee
    e = txt.indexOf("ൈ");
    n = txt.indexOf("ൈ");
    m = 1;
    while (e > -1) {
        while (txt[n - 2] == "്" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("ൈ");
        n = txt.indexOf("ൈ");
        m = 1;
    }


    //to replace ൊ in baravu 'e' should be added in the beginning of the letter and 'a' should be added in the end i.e. കൊ =‌ eka and ക്കൊ = ekAka
    e = txt.indexOf("ൊ");
    n = txt.indexOf("ൊ");
    m = 1;
    while (e > -1) {
        while (txt[n - 2] == "്" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + "a" + txt.slice(e + 1);
        e = txt.indexOf("ൊ");
        n = txt.indexOf("ൊ");
        m = 1;
    }

    //to replace ോ in baravu, 'F' should be added in the beginning of the letter and 'a' should be added in the end i.e. കോ =‌ Fka and ക്കോ = FkAka
    e = txt.indexOf("ോ");
    n = txt.indexOf("ോ");
    m = 1;
    while (e > -1) {
        while (txt[n - 2] == "്" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "F" + txt.slice(e - m, e) + "a" + txt.slice(e + 1);
        e = txt.indexOf("ോ");
        n = txt.indexOf("ോ");
        m = 1;
    }





    //if zwj is not present replace arka with 'f' ex: ര്ക : kf

    H = txt.indexOf("ര്");
    ra2 = txt[H + 2];
    while (H > -1) {
        if (/ക|ഖ|ഗ|ഘ|ങ|ച|ഛ|ജ|ഝ|ഞ|ട|ഠ|ഡ|ഢ|ണ|ത|ഥ|ദ|ധ|ന|പ|ഫ|ബ|ഭ|മ|യ|ല|വ|ശ|ഷ|സ|ഹ|ള/.test(ra2) && txt[H - 1] !== "്") {
            txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
            H = txt.indexOf("ര്");
            ra2 = txt[H + 2];
        } else {
            txt = txt.replace("ര്", "rA");
            H = txt.indexOf("ര്");
            ra2 = txt[H + 2];
        }
    }


    H = txt.indexOf("ർ");
    ra2 = txt[H + 1];
    while (H > -1) {
        if (/ക|ഖ|ഗ|ഘ|ങ|ച|ഛ|ജ|ഝ|ഞ|ട|ഠ|ഡ|ഢ|ണ|ത|ഥ|ദ|ധ|ന|പ|ഫ|ബ|ഭ|മ|യ|ല|വ|ശ|ഷ|സ|ഹ|ള/.test(ra2) && txt[H - 1] !== "്") {
            txt = txt.slice(0, H) + txt[H + 1] + "f" + txt.slice(H + 2);
            H = txt.indexOf("ർ");
            ra2 = txt[H + 1];
        } else {
            txt = txt.replace("ർ", "rA");
            H = txt.indexOf("ർ");
            ra2 = txt[H + 1];
        }
    }



    //replace every other letters
    txt = txt.replace(/അ/g, "XAA").replace(/ആ/g, "XAa").replace(/ഇ/g, "XAi").replace(/ഈ/g, "XAI").replace(/ഉ/g, "XAu").replace(/ഊ/g, "XAU").replace(/ഋ/g, "XAR").replace(/ൠ/g, "XARR").replace(/ൄ/g, "RR").replace(/എ/g, "eA").replace(/ഏ/g, "EA").replace(/ഐ/g, "eeA").replace(/ഒ/g, "eAa").replace(/ഓ/g, "FAa").replace(/ഔ/g, "AY").replace(/ൗ/g, "Y").replace(/ം/g, "M").replace(/ഃ/g, "H").replace(/ക/g, "k").replace(/ഖ/g, "K").replace(/ഗ/g, "g").replace(/ഘ/g, "G").replace(/ങ/g, "Z").replace(/ച/g, "c").replace(/ഛ/g, "C").replace(/ജ/g, "j").replace(/ഝ/g, "J").replace(/ഞ/g, "z").replace(/ട/g, "q").replace(/ഠ/g, "Q").replace(/ഡ/g, "w").replace(/ഢ/g, "W").replace(/ണ/g, "N").replace(/ത/g, "t").replace(/ഥ/g, "T").replace(/ദ/g, "d").replace(/ധ/g, "D").replace(/ന/g, "n").replace(/പ/g, "p").replace(/ഫ/g, "P").replace(/ബ/g, "b").replace(/ഭ/g, "B").replace(/മ/g, "m").replace(/യ/g, "y").replace(/ര/g, "r").replace(/ല/g, "l").replace(/വ/g, "v").replace(/ശ/g, "S").replace(/ഷ/g, "x").replace(/സ/g, "s").replace(/ഹ/g, "h").replace(/ള/g, "L").replace(/്/g, "A").replace(/ാ/g, "a").replace(/ു/g, "u").replace(/ൂ/g, "U").replace(/ൌ/g, "Y").replace(/ി/g, "i").replace(/ീ/g, "I").replace(/ൃ/g, "R").replace(/‍/g, "X").replace(/‌/g, "X").replace(/ä/g, "A").replace(/൧/g, "1").replace(/൨/g, "2").replace(/൩/g, "3").replace(/൪/g, "4").replace(/൫/g, "5").replace(/൬/g, "6").replace(/൭/g, "7").replace(/൮/g, "8").replace(/൯/g, "9").replace(/൦/g, "0");
    txt = txt.replace(/റ/g, "xxrhaxx").replace(/ഴ/g, "xxzhaxx").replace(/ർ/g, "rA").replace(/ൻ/g, "nA").replace(/ൺ/g, "NA").replace(/ൽ/g, "lA").replace(/ൾ/g, "LA");



    fa = txt.indexOf("fA")
    while (fa > -1) {

        var tt = ["k", "K", "g", "G", "Z", "c", "C", "j", "J", "z", "q", "Q", "w", "W", "N", "t", "T", "d", "D", "n", "p", "P", "b", "B", "m", "y", "r", "l", "v", "S", "x", "s", "h", "L"]

        if (tt.includes(txt[fa + 2])) {

            txt = txt.slice(0, fa) + "fXA" + txt.slice(fa + 2);

        }

        fa = txt.indexOf("fA", fa + 2);
    }



    //hindi

    //take input from user

    /*To handle arka and ottakshara separately replace "्" containing zwj to ä */
    txt = txt.replace(/्‍/g, "ä").replace(/‍/g, "");

    /*Tulu special characters replace*/
    //specail े'
    E = txt.indexOf("े\*");
    N = txt.indexOf("े\*");
    M = 1;
    while (E > -1) {
        while (txt[N - 2] == "्" || txt[N - 2] == "ä") {
            M = M + 2;
            N = N - 2;
        }
        txt = txt.slice(0, E - M) + "o" + txt.slice(E - M, E) + txt.slice(E + 2);
        E = txt.indexOf("े\*")
        N = txt.indexOf("े\*");
        M = 1;
    }


    //special े
    E = txt.indexOf("े\*");
    N = txt.indexOf("े\*");
    M = 1;
    while (E > -1) {
        while (txt[N - 2] == "्" || txt[N - 2] == "ä") {
            M = M + 2;
            N = N - 2;
        }
        txt = txt.slice(0, E - M) + "O" + txt.slice(E - M, E) + txt.slice(E + 2);
        E = txt.indexOf("े\*")
        N = txt.indexOf("े\*");
        M = 1;
    }

    //Other special characters 
    txt = txt.replace(/ऎ\*/g, "oA").replace(/ए\*/g, "OA").replace(/ु\*/g, "uAX");



    //as some functions fails to load when two diacritics are present making it easier to run by replacing diacritics based on the baravu needs..


    //replace ೖ with ee
    e = txt.indexOf("ै");
    n = txt.indexOf("ै");
    m = 1
    while (e > -1) {
        if (/ा|ि|ी|ु|ू|े|ै|ो|ौ|ृ/.test(txt[e - 1])) {
            n = n - 1;
            m = 2;
        }
        while (txt[n - 2] == "्" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1);

        e = txt.indexOf("ै");
        n = txt.indexOf("ै");
        m = 1
    }


    /* Baravu requires ೆ to be present before the letter i.e. ಕೆ = ek where ಕ = k and ೆ = e also ಕ್ಕೆ = ekAk (where ್ = A). We need to find ೆ and change its position to the starting of letter */
    e = txt.indexOf("ॆ");
    n = txt.indexOf("ॆ");
    m = 1;
    while (e > -1) {
        //as we need to find the position where we want to keep ೆ we need to find how many ottaksharas are there in the letter. The following function does that work by going backwards and finding ್.
        while (txt[n - 2] == "्" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        //now replace ೆ with e
        txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("ॆ")
        n = txt.indexOf("ॆ");
        m = 1;
    }

    // replace ೇ with E (position before the letter as in ೆ)
    e = txt.indexOf("े");
    n = txt.indexOf("े");
    m = 1;
    while (e > -1) {
        //as above ೆ function find the position to where the "E" should be placed
        while (txt[n - 2] == "्" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        //replace ೇ with E
        txt = txt.slice(0, e - m) + "E" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("े");
        n = txt.indexOf("े");
        m = 1;
    }




    // replace ೈ with ee (position is strating of the letter as in ೆ)
    e = txt.indexOf("ै");
    n = txt.indexOf("ै");
    m = 1;
    while (e > -1) {
        while (txt[n - 2] == "्" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1);
        e = txt.indexOf("ै");
        n = txt.indexOf("ै");
        m = 1;
    }


    //to replace ೊ in baravu 'e' should be added in the beginning of the letter and 'a' should be added in the end i.e. ಕೊ =‌ eka and ಕ್ಕೊ = ekAka
    e = txt.indexOf("ॊ");
    n = txt.indexOf("ॊ");
    m = 1;
    while (e > -1) {
        //find the position to where 'e' should be added
        while (txt[n - 2] == "्" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        //replace ೊ with 'e' in the beginning and 'a' in the end 
        txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + "a" + txt.slice(e + 1);
        e = txt.indexOf("ॊ");
        n = txt.indexOf("ॊ");
        m = 1;
    }

    //as in the above ೊ but here 'F' should be added in the beginning of the letter and a should be added in the ending
    //i.e. ಕೋ = Fka and ಕ್ಕೊ = FkAka
    e = txt.indexOf("ो");
    n = txt.indexOf("ो");
    m = 1;
    while (e > -1) {
        //find the position to where 'e' should be added
        while (txt[n - 2] == "्" || txt[n - 2] == "ä") {
            m = m + 2;
            n = n - 2;
        }
        //replace ೋ with 'F' in the beginning and 'a' in the end 
        txt = txt.slice(0, e - m) + "F" + txt.slice(e - m, e) + "a" + txt.slice(e + 1);
        e = txt.indexOf("ो");
        n = txt.indexOf("ो");
        m = 1;
    }




    //arka replacing
    //as ್ with zwj has been replaced as 'ä' we can convert the one which hasn't been replaced as 'ä' to arka. In baravu font 'f' should be added after the ottakshara.
    //i.e. ರ್ಕ = kf (note: Here main akshara is ರ and ottakshara is ಕ = k)
    H = txt.indexOf("र्");
    ra2 = txt[H + 2];
    //run function only if the ottakshara is available 
    while (H > -1) {
        if (/क|ख|ग|घ|च|छ|ज|झ|ट|ठ|ड|ढ|ण|त|थ|द|ध|न|प|फ|ब|भ|म|य|र|ल|व|श|ष|स|ह|ङ|ञ/.test(ra2) && txt[H - 1] !== "्") {
            //replace arka with 'f'
            txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
            H = txt.indexOf("र्");
            ra2 = txt[H + 2];
        } else {
            //if ottakshara is not available just replace ರ್ with 'rA'
            txt = txt.replace("र्", "rA");
            H = txt.indexOf("र्");
            ra2 = txt[H + 2];
        }
    }



    //replace every other letters and zwnj

    txt = txt.replace(/अ/g, "XAA").replace(/आ/g, "XAa").replace(/इ/g, "XAi").replace(/ई/g, "XAI").replace(/उ/g, "XAu").replace(/ऊ/g, "XAU").replace(/ऋ/g, "XAR").replace(/ॠ/g, "XARR").replace(/ऎ/g, "eA").replace(/ए/g, "EA").replace(/ऐ/g, "eeA").replace(/ऒ/g, "eAa").replace(/ओ/g, "FAa").replace(/औ/g, "XAY").replace(/ं/g, "M").replace(/ः/g, "H").replace(/क/g, "k").replace(/ख/g, "K").replace(/ग/g, "g").replace(/घ/g, "G").replace(/ङ/g, "Z").replace(/च/g, "c").replace(/छ/g, "C").replace(/ज/g, "j").replace(/झ/g, "J").replace(/ञ/g, "z").replace(/ट/g, "q").replace(/ठ/g, "Q").replace(/ड/g, "w").replace(/ढ/g, "W").replace(/ण/g, "N").replace(/त/g, "t").replace(/थ/g, "T").replace(/द/g, "d").replace(/ध/g, "D").replace(/न/g, "n").replace(/प/g, "p").replace(/फ/g, "P").replace(/ब/g, "b").replace(/भ/g, "B").replace(/म/g, "m").replace(/य/g, "y").replace(/र/g, "r").replace(/ल/g, "l").replace(/व/g, "v").replace(/श/g, "S").replace(/ष/g, "x").replace(/स/g, "s").replace(/ह/g, "h").replace(/ळ/g, "xxzhaxx").replace(/ऴ/g, "xxrhaxx").replace(/ऱ/g, "r").replace(/्/g, "A").replace(/ा/g, "a").replace(/ु/g, "u").replace(/ू/g, "U").replace(/ौ/g, "Y").replace(/ि/g, "i").replace(/ी/g, "I").replace(/ृ/g, "R").replace(/ॄ/g, "RR").replace(/‌/g, "X").replace(/‍/g, "").replace(/ä/g, "A").replace(/१/g, "1").replace(/२/g, "2").replace(/३/g, "3").replace(/४/g, "4").replace(/५/g, "5").replace(/६/g, "6").replace(/७/g, "7").replace(/८/g, "8").replace(/९/g, "9").replace(/०/g, "0");


    /* error manager*/


    fa = txt.indexOf("fA")
    while (fa > -1) {

        tt = ["k", "K", "g", "G", "Z", "c", "C", "j", "J", "z", "q", "Q", "w", "W", "N", "t", "T", "d", "D", "n", "p", "P", "b", "B", "m", "y", "r", "l", "v", "S", "x", "s", "h", "L"]

        if (tt.includes(txt[fa + 2])) {

            txt = txt.slice(0, fa) + "fXA" + txt.slice(fa + 2);

        }

        fa = txt.indexOf("fA", fa + 2);
    }




    return txt;
}