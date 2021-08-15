// dom関数で変数を宣言
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
img2.style.display = "none"
const img3 = document.querySelector("#img3");
img3.style.display = "none"
const img4 = document.querySelector("#img4");
img4.style.display = "none"
const img5 = document.querySelector("#img5");
img5.style.display = "none"
const img6 = document.querySelector("#img6");
img6.style.display = "none"
const img7 = document.querySelector("#img7");
img7.style.display = "none"
const kati  = document.querySelector("#kati");
kati.style.display = "none"
kati.style.fontSize="30px";
const aiko  = document.querySelector("#aiko");
aiko.style.display = "none"
aiko.style.fontSize="30px";
const make  = document.querySelector("#make");
make.style.display = "none"
make.style.fontSize="30px";
const button1 = document.querySelector("#button1");
button1.style.fontSize="30px";
const resultButton = document.querySelector("#resetButton")

// 勝負ボタンを押したら画像とボタンを隠す
button1.onclick = function(){
    button1.style.display = "none";
    img1.style.display = "none"
    img2.style.display = ""
    img3.style.display = ""
    img4.style.display = ""

};

// じゃんけんの乱数処理と結果表示
img2.onclick = function(){
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.display = "none"
    var master1 = Math.ceil(Math.random()*3);
    if (master1==1){
        img5.style.display = ""
        aiko.style.display = ""
    } else if(master1==2){
        img6.style.display = ""
        kati.style.display = ""
    } else if(master1==3){
        img7.style.display = ""
        make.style.display = ""
    }
};

img3.onclick = function(){
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.display = "none"
    var master2 = Math.ceil(Math.random()*3);
    if (master2==1){
        img5.style.display = ""
        make.style.display = ""
    } else if(master2==2){
        img6.style.display = ""
        aiko.style.display = ""
    } else if(master2==3){
        img7.style.display = ""
        kati.style.display = ""
    }
};

img4.onclick = function(){
    img2.style.display = "none"
    img3.style.display = "none"
    img4.style.display = "none"
    var master3 = Math.ceil(Math.random()*3);
    if (master3==1){
        img5.style.display = ""
        kati.style.display = ""
    } else if(master3==2){
        img6.style.display = ""
        make.style.display = ""
    } else if(master3==3){
        img7.style.display = ""
        aiko.style.display = ""
    }
};

kati.onclick = function(){
    kati.style.display = "none"
    img5.style.display = "none"
    img6.style.display = "none"
    img7.style.display = "none"
    img2.style.display = ""
    img3.style.display = ""
    img4.style.display = ""
};

aiko.onclick = function(){
    aiko.style.display = "none"
    img5.style.display = "none"
    img6.style.display = "none"
    img7.style.display = "none"
    img2.style.display = ""
    img3.style.display = ""
    img4.style.display = ""
};

make.onclick = function(){
    make.style.display = "none"
    img5.style.display = "none"
    img6.style.display = "none"
    img7.style.display = "none"
    img2.style.display = ""
    img3.style.display = ""
    img4.style.display = ""
};

        // Mathオブジェクトの練習
            // var a1 = Math.ceil(Math.random()*3);
            // alert (a1);


// button1.onclick = function(e){
// alert("クリックしました");
// }

//     var a1 = a+b;
//     return a1;