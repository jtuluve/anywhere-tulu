// create the div element and set its attributes

const div = document.createElement('div');

div.className = 'genanav';

// create the input element and set its attributes

const input = document.createElement('input');

input.type = 'checkbox';

input.id = '_genacheckbox_';

input.name = '_genacheckbox_';

// create the span element and set its attributes

const span = document.createElement('span');

span.style.color = 'azure';

span.textContent = 'TuluScript';

// append the input and span elements to the div element

div.appendChild(input);

div.appendChild(span);

// get the body element and insert the div element at the beginning

const body = document.getElementsByTagName('body')[0];

body.insertBefore(div, body.firstChild);



const style = document.createElement('style');

style.textContent = `

    .genanav {

        position: fixed;

        height: fit-content;

        width: 10%;

        background-color: rgb(60, 60, 60);

        top: 0px;

        right: 0px;

        border: blue;

        border-radius: 4px;

        padding: 3px;

    }

`;

document.head.appendChild(style);


var checkbox =document.getElementById("_genacheckbox_")
checkbox.addEventListener('change', function() {
    if (this.checked) {
      _gena2tulu_()
    } else {
      _gena2org_()
    }
  });
var fontFace = "@font-face { font-family: 'baravu'; src: url('./fonts/Mandara.ttf') format('truetype'); }";

var style = document.createElement("style");
style.innerHTML = fontFace;
document.head.appendChild(style);
var datas = new Map();
function _gena2tulu_(){
var elements = document.getElementsByClassName("genatulu");
let namee = "hehe";
for (var i = 0; i < elements.length; i++) {
  elements[i].style.fontFamily = "baravu";

  datas.set("p"+i,elements[i].innerText)
  console.log(datas)

  let txt = elements[i].innerText 
  txt = txt.replace(/್‍/g, "ä").replace(/‍/g, "")
  
  /*Tulu special characters replace*/
  //specail ೆ'
  let E = txt.indexOf("ೆ\*")
  let N = txt.indexOf("ೆ\*")
  let M = 1;
  while(E>-1){
                  while(txt[N-2]=="್" || txt[N-2]=="ä"){
                                  M = M+2;
                                  N = N-2;
                  }
      txt = txt.slice(0, E - M) + "o" + txt.slice(E - M, E) + txt.slice(E + 2); 
  E = txt.indexOf("ೆ\*")
  N =  txt.indexOf("ೆ\*");
  M = 1;
  }
  
  
  //special ೇ'
  E = txt.indexOf("ೇ\*");
  N =  txt.indexOf("ೇ\*");
  M = 1;
  while(E>-1){
                  while(txt[N-2]=="್" || txt[N-2]=="ä"){
                                  M = M+2;
                                  N = N-2;
                  }
      txt = txt.slice(0, E - M) + "O" + txt.slice(E - M, E) + txt.slice(E + 2); 
  E = txt.indexOf("ೇ\*")
   N =  txt.indexOf("ೇ\*");
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
  while(e>-1){
  if(/ಾ|ಿ|ೀ|ು|ೂ|ೃ|ೆ|ೇ|ೊ|ೋ|ೌ/.test(txt[e-1])){
                  n = n-1;
                  m = 2;
  }
  while(txt[n-2]=="್" || txt[n-2]=="ä"){
                                  m = m+2;
                                  n = n-2;
                  }
      txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1); 
   
   e = txt.indexOf("ೖ");
   n = txt.indexOf("ೖ");
   m = 1
  }
  
  
  /* Baravu requires ೆ to be in the before the letter i.e. ಕೆ = ek where ಕ = k and ೆ = e also ಕ್ಕೆ = ekAk (where ್ = A). We need to find ೆ and change its position to the starting of letter */
  e = txt.indexOf("ೆ");
  n =  txt.indexOf("ೆ");
  m = 1;
  while(e>-1){
  //as we need to find the position where we want to keep ೆ we need to find how many ottaksharas are there in the letter. The following function does that work by going backwards and finding ್.
                  while(txt[n-2]=="್" || txt[n-2]=="ä"){
                                  m = m+2;
                                  n = n-2;
                  }
  //now replace ೆ with e
      txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + txt.slice(e + 1); 
  e = txt.indexOf("ೆ")
   n =  txt.indexOf("ೆ");
   m = 1;
  }
  
  // replace ೇ with E (position before the letter as in ೆ)
  e = txt.indexOf("ೇ");
  n =  txt.indexOf("ೇ");
   m = 1;
  while(e>-1){
  //as above ೆ function find the position to where the "E" should be placed
                  while(txt[n-2]=="್" || txt[n-2]=="ä"){
                                  m = m+2;
                                  n = n-2;
                  }
  //replace ೇ with E
      txt = txt.slice(0, e - m) + "E" + txt.slice(e - m, e) + txt.slice(e + 1); 
  e = txt.indexOf("ೇ");
   n =  txt.indexOf("ೇ");
   m = 1;
  }
  
  
  
  
  // replace ೈ with ee (position is strating of the letter as in ೆ)
  e = txt.indexOf("ೈ");
  n =  txt.indexOf("ೈ");
   m = 1;
  while(e>-1){
                  while(txt[n-2]=="್" || txt[n-2]=="ä"){
                                  m = m+2;
                                  n = n-2;
                  }
      txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1); 
  e = txt.indexOf("ೈ");
   n =  txt.indexOf("ೈ");
   m = 1;
  }
  
  
  //to replace ೊ in baravu 'e' should be added in the beginning of the letter and 'a' should be added in the end i.e. ಕೊ =‌ eka and ಕ್ಕೊ = ekAka
  e = txt.indexOf("ೊ");
  n =  txt.indexOf("ೊ");
   m = 1;
  while(e>-1){
  //find the position to where 'e' should be added
                  while(txt[n-2]=="್" || txt[n-2]=="ä"){
                                  m = m+2;
                                  n = n-2;
                  }
  //replace ೊ with 'e' in the beginning and 'a' in the end 
      txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + "a" + txt.slice(e + 1); 
  e = txt.indexOf("ೊ");
   n =  txt.indexOf("ೊ");
   m = 1;
  }
  
  //as in the above ೊ but here 'F' should be added in the beginning of the letter and a should be added in the ending
  //i.e. ಕೋ = Fka and ಕ್ಕೊ = FkAka
  e = txt.indexOf("ೋ");
  n =  txt.indexOf("ೋ");
   m = 1;
  while(e>-1){
  //find the position to where 'e' should be added
                  while(txt[n-2]=="್" || txt[n-2]=="ä"){
                                  m = m+2;
                                  n = n-2;
                  }
      //replace ೋ with 'F' in the beginning and 'a' in the end 
      txt = txt.slice(0, e - m) + "F" + txt.slice(e - m, e) + "a" + txt.slice(e + 1); 
  e = txt.indexOf("ೋ");
   n =  txt.indexOf("ೋ");
   m = 1;
  }
  
  
  
  
  //arka replacing
  //as ್ with zwj has been replaced as 'ä' we can convert the one which hasn't been replaced as 'ä' to arka. In baravu font 'f' should be added after the ottakshara.
  //i.e. ರ್ಕ = kf (note: Here main akshara is ರ and ottakshara is ಕ = k)
  let H = txt.indexOf("ರ್");
  let ra2 = txt[H+2];
  //run function only if the ottakshara is available 
  while (H > -1){
  if (/ಕ|ಖ|ಗ|ಘ|ಙ|ಚ|ಛ|ಜ|ಝ|ಞ|ಟ|ಠ|ಡ|ಢ|ಣ|ತ|ಥ|ದ|ಧ|ನ|ಪ|ಫ|ಬ|ಭ|ಮ|ಯ|ಲ|ವ|ಶ|ಷ|ಸ|ಹ|ಳ/.test(ra2) && txt[H-1] !== "್"){
  //replace arka with 'f'
  txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
  H = txt.indexOf("ರ್");
  ra2 = txt[H+2];
  }else{
  //if ottakshara is not available just replace ರ್ with 'rA'
  txt = txt.replace("ರ್", "rA");
  H = txt.indexOf("ರ್");
  ra2 = txt[H+2];
  }
  }
  
  
  
  //replace every other letters and zwnj
  
  let rep = txt.replace(/ಅ/g, "XAA").replace(/ಆ/g, "XAa").replace(/ಇ/g, "XAi").replace(/ಈ/g, "XAI").replace(/ಉ/g, "XAu").replace(/ಊ/g, "XAU").replace(/ಋ/g, "XAR").replace(/ೠ/g, "XARR").replace(/ಎ/g, "eA").replace(/ಏ/g, "EA").replace(/ಐ/g, "eeA").replace(/ಒ/g, "eAa").replace(/ಓ/g, "FAa").replace(/ಔ/g, "XAY").replace(/ಂ/g, "M").replace(/ಃ/g, "H").replace(/ಕ/g, "k").replace(/ಖ/g, "K").replace(/ಗ/g, "g").replace(/ಘ/g, "G").replace(/ಙ/g, "Z").replace(/ಚ/g, "c").replace(/ಛ/g, "C").replace(/ಜ/g, "j").replace(/ಝ/g, "J").replace(/ಞ/g, "z").replace(/ಟ/g, "q").replace(/ಠ/g, "Q").replace(/ಡ/g, "w").replace(/ಢ/g, "W").replace(/ಣ/g, "N").replace(/ತ/g, "t").replace(/ಥ/g, "T").replace(/ದ/g, "d").replace(/ಧ/g, "D").replace(/ನ/g, "n").replace(/ಪ/g, "p").replace(/ಫ/g, "P").replace(/ಬ/g, "b").replace(/ಭ/g, "B").replace(/ಮ/g, "m").replace(/ಯ/g, "y").replace(/ರ/g, "r").replace(/ಲ/g, "l").replace(/ವ/g, "v").replace(/ಶ/g, "S").replace(/ಷ/g, "x").replace(/ಸ/g, "s").replace(/ಹ/g, "h").replace(/ಳ/g, "L").replace(/ೞ/g, "L").replace(/ಱ/g, "r").replace(/್/g, "A").replace(/ಾ/g, "a").replace(/ು/g, "u").replace(/ೂ/g, "U").replace(/ೌ/g, "Y").replace(/ಿ/g, "i").replace(/ೀ/g, "I").replace(/ೃ/g, "R").replace(/‌/g, "X").replace(/‍/g, "").replace(/ä/g, "A"); 
  
  
  /* error manager*/
  
  
  let fa = rep.indexOf("fA")
  while(fa>-1){
  
  var tt = ["k", "K", "g", "G", "Z", "c", "C", "j", "J", "z", "q", "Q", "w", "W", "N", "t", "T", "d", "D", "n", "p", "P", "b", "B", "m", "y", "r", "l", "v", "S", "x", "s", "h", "L"]
  
  if(tt.includes(rep[fa+2])){
  
  rep = rep.slice(0, fa) + "fXA" + rep.slice(fa+2);
  
  }
  
  fa = rep.indexOf("fA", fa+2);
  }
  
  
  elements[i].innerText = rep;


}
}
function _gena2org_(){
    var elements = document.getElementsByClassName("genatulu");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = datas.get("p"+i)
        
    }
}
