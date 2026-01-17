let paraTagById = document.getElementById('testpara');
let paraTagByClass = document.getElementsByClassName('myClass')
let paraTagByTagName = document.getElementsByTagName('p');


function btnClick(){
    // console.log(paraTagById)
    // console.log(paraTagByClass[0])
    // console.log(paraTagByTagName[1])
    // paraTagByTagName[1].innerHTML = 'I am clicked'


    let h1Tag = document.createElement('h1'); //<h1></h1>
    let mytext = document.createTextNode('Heading is here'); // Heading is here
    h1Tag.appendChild(mytext) // <h1>Heading is here</h1>

    let emptyContainer = document.createElement('div');
    emptyContainer.appendChild(h1Tag); //<div><h1>Heading is here</h1> </div>

    document.body.appendChild(emptyContainer)
    

}   


function dropdownChange(value){
    console.log(value)
}


function mouseHover(){
    console.log('mouse is over button')
}
// parameters








// DOM Manipulation
// document object model



// Hoisting
// Event Delegation
// Event Listeners
// scoping

// Async Programming
