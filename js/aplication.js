function next1() {
    document.getElementById('form1').style.display = "none";
    document.getElementById('form2').style.display = "block";
}

function previous1() {
    document.getElementById('form1').style.display = "block";
    document.getElementById('form2').style.display = "none";
}

function next2() {
    document.getElementById('form2').style.display = "none";
    document.getElementById('form3').style.display = "block";
}

function previous2() {
    document.getElementById('form1').style.display = "none";
    document.getElementById('form2').style.display = "block";
    document.getElementById('form3').style.display = "none";

}

function next3() {
    document.getElementById('form3').style.display = "none";
    document.getElementById('form4').style.display = "block";
    document.getElementById('btnfooter').style.display = "block";
}

function previous3() {
    document.getElementById('form3').style.display = "block";
    document.getElementById('form4').style.display = "none";
    document.getElementById('btnfooter').style.display = "none";
}
