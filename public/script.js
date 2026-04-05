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

function deleteNote(index) {
    notes.splice(index, 1);
    display(notes);
}

function display(data) {
    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach((n, i) => {
        list.innerHTML += `
            <li>
                ${n}
                <button onclick="deleteNote(${i})">Delete</button>
            </li>
        `;
    });
}