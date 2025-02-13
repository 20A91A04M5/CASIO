function c1() {
    let in1 = document.getElementById("inp");
    if (str === "NaN") {
        in1.value = "Cannot divide by Zero";
    } else {
        in1.value = str;
    }
    txt=document.getElementById("area")
    txt.value=availed
}
let str = '';
let availed='';
function ac() {
    str = "";
    c1();
}
function del() {
    str = str.slice(0, -1);
    c1();
}
function sqt() {
    x = str;
    str = (Math.sqrt(x));
    c1();
}

function operator(op) {
    if (str !== "") {
        str += op;
    }
    c1();
}

function num(n) {
    str += n;
    c1();
}

function eql() {
    let ans = eval(str);
    str = ans.toString();
    availed+=ans+"\n"
    c1();
}
function acc(){
    availed=""
    c1()
}