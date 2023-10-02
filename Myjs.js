function check(){
    var operation = parseInt(document.getElementById("operation").value);

    if (operation == 1){
        alert("1 is for Addition");
        return;
    }
    else if (operation == 2){
        alert("2 is for subtraction");
        return;
    }
    else if (operation == 3){
        alert("3 is for multiplication");
        return;
    }
    else if (operation == 4){
        alert("4 is for division");
        return;
    }
    else{
        alert("Please Enter Number Between 1-4");
        return;
    }
}

function Operation(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var operation = parseFloat(document.getElementById("operation").value);

    if (operation == 1 ){
        var result = a + b;
        document.getElementById("result").innerHTML = "The Sum Is: " + result; 
    }
    else if (operation == 2 ){
        var result = a - b;
        document.getElementById("result").innerHTML = "The Difference Is: " + result; 
    }
    else if (operation == 3 ){
        var result = a * b;
        document.getElementById("result").innerHTML = "The Product Is: " + result; 
    }
    else if (operation == 4 ){
        var result = a / b;
        document.getElementById("result").innerHTML = "The Qoutient Is: " + result; 
    }
    else{
        alert("The Operation Choices is Between 1-4 Only");
        return;
    }
}