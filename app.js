const yargs = require('yargs')

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Adds a note',
    handler: function () {
        console.log('What did you call me? Ok, I ll add a note for you.')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function () {
        console.log('What really? Alright, I ll remove this note for you.')
    }
})


yargs.parse()