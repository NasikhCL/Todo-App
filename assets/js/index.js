
// fetching the element from the html
const category = document.getElementsByClassName('todo-category');

// looping over the list to add the appropriate class to display the background color for the category
for(let i=0 ; i< category.length;i++){
    if(category[i].innerText == 'Work'){
        category[i].classList.add("work");
    }
    else if(category[i].innerText == 'Cleaning'){
        category[i].classList.add("cleaning");
    }
    else if(category[i].innerText == 'Personal'){
        category[i].classList.add("personal");
    }
    else if(category[i].innerText == 'School'){
        category[i].classList.add("school");
    }
    else{
        category[i].classList.add("other");
    }
    
    console.log(`javascript loaded inside loop`);
}


console.log(`javascript loaded`);

// fucntion to pop up an alert box when user didnt typed anything and tried to submit
function addedAlert(){
const description = document.getElementById('description-input');
if ( description.value == 0 ) {
    alert('please write your task before adding')
}


}

// function to pop up alert box when user checked some items and press the delete button
function deletedAlert(){
const checkbox = document.getElementById('check-to-delete');
if(checkbox.checked == true){
    alert('selected tasks are deleting from the list')
    }

}