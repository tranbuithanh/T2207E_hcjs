var x;
x = 10;
x ="xin chao cac ban";
x = 3.14;
var y= 20;
var z = x + y; //23.14
x = "hello";
var k = x + y;
//hello + 10 ->hello10
//10 + hello ->10hello
//hello + world ->helloworld
console.log(k);
var t = true;// false
for (var i=0;i<10;i++){
    console.log("i=" + i)
}
var ar= [];
ar[0] = 1;
ar.push(10);
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
// duyet mang theo chi muc (index)
for(var i = 0;i<ar.length;i++){
    console.log(ar[i]);
}
// duyet mang theo kieu xet tung phan tu- foreach
ar.map(xyz=>{
    console.log(xyz);
});
var tk=tinhtong(5,3);
var tk2=tinhtong("hello",10);

function tinhtong(a,b) {
    return a+b;
}

console.log(tk);
console.log(tk2);

function demo(){
    console.log("Hello everybody...");
}

//setTimeout(demo,1000); // Demo: callback function
console.log("ABCXYZ...");
var n = 10;
function  countdown() {
    var xyz = document.getElementById("head")
   xyz.innerText = n;
    n--;
    if(n<0) {
       // clearInterval(si);
    }
}
//var si = setInterval(countdown,1000);

// viết chương trình cứ 2s in ra 1 số chẵn tăng dần theo thời gian
// in tối đa 10 số

var chan = 0;
function inrasochan() {
    var ppp = document.getElementById("sochansau2s")
    ppp.innerText = chan;
    console.log(chan);
    chan=chan+2;
    if(chan>20){
        clearInterval(so);
    }
}
var so = setInterval(inrasochan,2000);