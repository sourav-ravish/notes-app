const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Adds a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function () {
        console.log('What really? Alright, I ll remove this note for you.')
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: function () {
        console.log('I ll list the notes for you.')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('I ll read a note, you tell me which one. ')
    }
})


yargs.parse()