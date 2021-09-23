/*
* Excercise 1
*
*/

const box = document.getElementById("color-block");
box.addEventListener('click', changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    const box = document.getElementById("color-block");
    const colorName = document.getElementById("color-name")
    //Write a condition determine what color it should be changed to
    if(colorName.innerText==="#F08080"){
        //change the background color using JS
        box.style.backgroundColor = '#F00808';
        //Change the text of the color using the span id color-name
        colorName.innerText = '#F00808';
    }
    else{
        //change the background color using JS
        box.style.backgroundColor = '#F08080';
        //Change the text of the color using the span id color-name
        colorName.innerText = '#F08080';

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const btn = document.getElementById('convertbtn');
btn.addEventListener('click', convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const fTemp = document.getElementById('f-input').value;
    const cTemp = (fTemp - 32) * 5 / 9;
    //Send the calculated temperature to HTML
    document.getElementById('c-output').innerText = cTemp;
}


