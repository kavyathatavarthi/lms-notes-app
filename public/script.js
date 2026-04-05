let notes = [];

function addNote() {
    let note = document.getElementById("note").value;
    notes.push(note);
    display(notes);
}

function searchNote() {
    let key = document.getElementById("search").value.toLowerCase();
    let filtered = notes.filter(n => n.toLowerCase().includes(key));
    display(filtered);
}

function display(data) {
    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(n => {
        list.innerHTML += `<li>${n}</li>`;
    });
}