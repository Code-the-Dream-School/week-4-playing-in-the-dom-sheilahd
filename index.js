//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here

const divOrig = document.getElementById('a-1');
const divElem = document.createElement('div');

divOrig.appendChild(divElem);
divElem.className = "square";
divElem.textContent = 'x';

divElem.addEventListener('click', () => {
    if (divElem.textContent == 'x') {
        divElem.textContent = 'o';
    } else {
        divElem.textContent = 'x';
    }
});



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
//resolve // QUESTION 2 here

const colors = ['red', 'white', 'black', 'green', 'orange'];
const div2 = document.getElementById('a-2');
const selectList = document.createElement("select");
selectList.id = "mySelect";
div2.appendChild(selectList);

for (let i = 0; i < colors.length; i++) {
    let itemOption = document.createElement("option");
    itemOption.text = colors[i];
    itemOption.id = colors[i];
    selectList.appendChild(itemOption);
};

const removeItemButton = document.createElement("button");
removeItemButton.innerText = "Remove Item";

div2.appendChild(removeItemButton);
removeItemButton.addEventListener('click', () => {
    const selectedColor = document.getElementById(selectList.value);
    selectedColor.remove();

});

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

const radioInput = document.getElementById('radius');
let volumeIn = document.getElementById('volume');
let areaIn = document.getElementById('area');

const calculate_sphere = () => {

    const r = parseFloat(radioInput.value);
    let volume = (4 / 3) * Math.PI * (r ** 3);
    let area = 4 * Math.PI * (r ** 2);
    volumeIn.value = volume.toFixed(2);
    areaIn.value = area.toFixed(2);
    return false;
};

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked


//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective question above with their aswer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens


//resolve // QUESTION 4 here

let questions = document.querySelectorAll('.question-item');

const div4 = document.getElementById("a-4");


// for (i = 0; i < 3; i++) {
//     let button = document.createElement("button");
//     button.innerText = (`Hide question ${i + 1}`);
//     div4.appendChild(button);
//     console.log(button);
// }  


const buttonOne = document.createElement("button");
buttonOne.innerText = "Hide question1";
const buttonTwo = document.createElement("button");
buttonTwo.innerText = "Hide question2";
const buttonThree = document.createElement("button");
buttonThree.innerText = "Hide question3";

// // div4.appendChild(buttonOne, buttonTwo, buttonThree); 

div4.appendChild(buttonOne);
div4.appendChild(buttonTwo);
div4.appendChild(buttonThree);

let questionOne = questions[0];
let questionTwo = questions[1];
let questionThree = questions[2];

buttonOne.addEventListener('click', () => {

    if (questionOne.style.visibility === "hidden") {
        questionOne.style.visibility = "visible";
        buttonOne.innerText = "Hide question1";

    } else {
        questionOne.style.visibility = "hidden";
        (buttonOne.innerText = "Show question1");

    }
});

buttonTwo.addEventListener('click', () => {

    if (questionTwo.style.visibility === "hidden") {
        questionTwo.style.visibility = "visible";
        buttonTwo.innerText = "Hide question2";
    } else {
        questionTwo.style.visibility = "hidden";
        (buttonTwo.innerText = "Show question2");

    }
});
buttonThree.addEventListener('click', () => {

    if (questionThree.style.visibility === "hidden") {
        questionThree.style.visibility = "visible";
        buttonThree.innerText = "Hide question3";
    } else {
        questionThree.style.visibility = "hidden";
        (buttonThree.innerText = "Show question3");

    }
});

