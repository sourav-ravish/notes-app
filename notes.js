const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) =>  {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('Note added successfully!'))
    } else {
        console.log(chalk.red.inverse.bold('Note was already present!'))
    }
    
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch(e){
        return []
    }
}

const saveNotes = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    addNote: addNote
}