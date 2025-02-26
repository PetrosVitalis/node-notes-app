const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder:  {
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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder:  {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'Create list',
    handler() {
        notes.listNotes()
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Read note',
    builder:  {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()