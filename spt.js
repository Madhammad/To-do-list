let input = document.getElementById('input');
let add = document.getElementById('add');
let list = document.getElementById('list');

// console.log(list)



add.addEventListener('click', function () {
    if (input.value === "") {
        alert(`please enter some data`)
    }
    else {

        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'x'
        li.appendChild(span);

    }
    input.value = '';
    saveDAta();
})

list.addEventListener('click', function (details) {
    //  console.log(details.target.tagName)
    if (details.target.tagName === "LI") {
        details.target.classList.toggle('cheaked')
        saveDAta();
    }
    else if (details.target.tagName === "SPAN") {
        details.target.parentElement.remove()
        saveDAta();
    }

}, false);

function saveDAta() {
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem('data');
}
showTask();