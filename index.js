//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'

//resolve // QUESTION 1 here
//get elements by dividers html
const divOrig = document.getElementById('a-1');
const divElem = document.createElement('div');

divOrig.appendChild(divElem);
divElem.className = "square";
divElem.textContent = 'x';

//add click to divider element if already "x" switch to "o" and viceversa
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
// const to select element from html//create select for dropdown
const div2 = document.getElementById('a-2');
const selectList = document.createElement("select");
//selectList appendchild of html div
div2.appendChild(selectList);
console.log(selectList);

//loop through the array of colors
for (let i = 0; i < colors.length; i++) {
    //create option element for dropdown//itemOption text is color (index) on the loop
    let itemOption = document.createElement("option");
    itemOption.text = colors[i];
    console.log(itemOption.text);
    //itemOption id is color (index) on the loop//append itemOption to the dropdown list
    itemOption.id = colors[i];
    console.log(itemOption.id);
    selectList.appendChild(itemOption);
};
console.log(selectList);

//create remove button and adding text to it, button appendchild of html div
const removeItemButton = document.createElement("button");
removeItemButton.innerText = "Remove Item";
div2.appendChild(removeItemButton);

//add click event to button/new const to get select list by id  previously defined/selected color value remove when click
removeItemButton.addEventListener('click', () => {
    const selectedColor = document.getElementById(selectList.value);
    selectedColor.remove();
});

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)
//variables fields//select from html
const radioInput = document.getElementById('radius');
let volumeIn = document.getElementById('volume');
let areaIn = document.getElementById('area');


const calculate_sphere = () => {
//const for input value//defining math for each function
    const r = parseFloat(radioInput.value);
    let volume = (4 / 3) * Math.PI * (r ** 3);
    let area = 4 * Math.PI * (r ** 2);
    volumeIn.value = volume.toFixed(2);
    //results fixed to 2 decimal places
    areaIn.value = area.toFixed(2);
    //skipping default behavior
    return false;
};

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked


//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective question above with their aswer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens


//resolve // QUESTION 4 here

//create questions var//array from dividers in html
let questions = document.querySelectorAll('.question-item');
const div4 = document.getElementById("a-4");

  
//loop to create 3 buttons
for (let i = 0; i < 3; i++) {
    let button = document.createElement("button");
    button.innerText = (`Hide question ${i + 1}`);
    div4.appendChild(button);
    
    //event click for buttons//conditionals using questions array[index] from the loop
    button.addEventListener('click', () => {
        if (questions[i].style.visibility == "hidden") {
            questions[i].style.visibility = "visible";
            button.innerText = `Hide question ${i + 1}`

        } else {
            questions[i].style.visibility = "hidden"
            button.innerText = (`Show question ${i + 1}`)
        }
    });
}     
          
                
           
        
     