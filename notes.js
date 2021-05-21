
const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    // console.log(notes);

    // const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('new note added');
    }
    else {
        console.log('notes already exist with same title');
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote) {
        console.log(chalk.inverse(duplicateNote.title));
        console.log(chalk.blueBright(duplicateNote.body));
    }
    else {
        console.log('notes not exist with title');
    }

}

const removeNote = (title) => {
    // console.log(title);
    const notes = loadNotes();
    const noteToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > noteToKeep.length) {
        console.log(chalk.green.inverse('notes removed'));
        saveNotes(noteToKeep);
    }
    else {
        console.log(chalk.red.inverse('no notes removed'));
    }
}

const listNotes =()=>{
    const notes=loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return []
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}