function alertPopUp() {
    alert("Hello, world!");
}


function textSizeIncrease(){
    document.getElementById("textfield").style.fontSize = "24pt";
}



function stylingLogic(){
    if(document.getElementById("styled").checked){
        document.getElementById("textfield").style.fontWeight = "bold";
        document.getElementById("textfield").style.color = "blue";
        document.getElementById("textfield").style.textDecoration = "underline";
    } else if(document.getElementById("unstyled").checked) {
        document.getElementById("textfield").style.fontWeight = "normal";
        document.getElementById("textfield").style.color = "black";
        document.getElementById("textfield").style.textDecoration = "none";
            document.getElementById("styled").checked = false;
    }
}


function mooButton(){
    var textBox = document.getElementById("textfield");
    var textVal = textBox.value.toUpperCase();

    var split = textVal.split(".");
    for(var i=0; i<split.length - 1; i++){
        split[i] = split[i].trim() + "-MOO";
    }

    textBox.value = split.join(". ").trim();

    
}

