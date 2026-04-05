let notes = [];

function addNote() {
    let note = document.getElementById("note").value;
    notes.push(note);
    display();
}

function display() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    notes.forEach(n => {
        list.innerHTML += `<li>${n}</li>`;
    });
}