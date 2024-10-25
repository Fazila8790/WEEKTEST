const textAreaElement = document.getElementById("noteTextArea");
const colorInputElement = document.getElementById("noteColorInput");
const addNoteButtonElement = document.getElementById("createNoteButton");
const notesContainerElement = document.getElementById("notesContainer");
const noNotesMessageElement = document.getElementById("noNotesMessage");

addNoteButtonElement.addEventListener("click", () => {
    const noteContent = textAreaElement.value.trim();
    const noteColor = colorInputElement.value;

    if (noteContent === "") {
        alert("Please enter some text!");
        textAreaElement.classList.add("shake-effect");
        return;
    }

    textAreaElement.classList.remove("shake-effect");
    createNewNote(noteContent, noteColor);
    textAreaElement.value = "";
    noNotesMessageElement.style.display = "none";
});

function createNewNote(content, backgroundColor) {
    const noteDiv = document.createElement("div");
    noteDiv.innerHTML = `<p>${content}</p> <button class="delete-note-btn">X</button>`;
    noteDiv.style.backgroundColor = backgroundColor;
    noteDiv.classList.add("note-card");
    notesContainerElement.appendChild(noteDiv);
    addDeleteNoteEvent();
}

function addDeleteNoteEvent() {
    const deleteButtons = document.querySelectorAll(".delete-note-btn");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.parentElement.remove();
            if (notesContainerElement.children.length === 0) {
                noNotesMessageElement.style.display = "flex";
            }
        });
    });
}
