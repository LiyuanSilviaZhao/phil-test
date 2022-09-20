function myFunction() {
    var a = document.getElementById("paragraphToBeChanged").innerHTML;
    console.log("my a = " + a);
    var b = Number(a) + 1; 
    console.log("my b = " + b);
     document.getElementById("paragraphToBeChanged").innerHTML = b;
    
    };