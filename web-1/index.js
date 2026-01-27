let paraTagById = document.getElementById('testpara');
let paraTagByClass = document.getElementsByClassName('myClass')
let paraTagByTagName = document.getElementsByTagName('p');


function btnClick(){
    // console.log(paraTagById)
    // console.log(paraTagByClass[0])
    // console.log(paraTagByTagName[1])
    // paraTagByTagName[1].innerHTML = 'I am clicked'
    if(document.getElementsByClassName('firstHeading').length > 0) return;

    else{
        let h1Tag = document.createElement('h1'); //<h1></h1>
    h1Tag.classList.add('firstHeading');

    let mytext = document.createTextNode('Heading is here'); // Heading is here
    h1Tag.appendChild(mytext) // <h1>Heading is here</h1>

    let emptyContainer = document.createElement('div');
    emptyContainer.appendChild(h1Tag); //<div><h1>Heading is here</h1> </div>
    document.body.appendChild(emptyContainer)



    document.getElementsByClassName('firstHeading')[0].addEventListener('click', eventListenerFunction)
    }
    
}   


function dropdownChange(value){
    console.log(value)
}


function eventListenerFunction(){
    console.log('listener is working')
}


function mouseHover(){
    console.log('mouse is over button')
}
// parameters








// DOM Manipulation
// document object model



// Hoisting - done
// Event Delegation
// Event Listeners - done
// scoping

// Async Programming
// prototyping
