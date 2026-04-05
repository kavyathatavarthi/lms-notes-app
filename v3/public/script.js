let notes = JSON.parse(localStorage.getItem("notes")) || [];

display(notes);

function addNote() {
    let note = document.getElementById("note").value;
    let time = new Date().toLocaleString();

    let newNote = note + " (" + time + ")";
    notes.push(newNote);

    localStorage.setItem("notes", JSON.stringify(notes));
    display(notes);
}

function searchNote() {
    let key = document.getElementById("search").value.toLowerCase();
    let filtered = notes.filter(n => n.toLowerCase().includes(key));
    display(filtered);
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
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

function downloadNotes() {
    let blob = new Blob([notes.join("\n")], { type: "text/plain" });
    let a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "notes.txt";
    a.click();
}