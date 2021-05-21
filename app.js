// console.log('starting work on nodejs');
const { argv } = require('yargs');
const yargs= require('yargs');
const notes= require('./notes.js');
yargs.command({
    command:'add',
    describe:'testing add command',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        // console.log('adding new notes'+" title="+argv.title+" body="+argv.body);
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command:'remove',
    describe:'testing remove',
    builder:{
        title:{
            describe:'remove title',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        // console.log('removing notes '+" Title="+ argv.title);
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command:'list',
    describe:'testing list',
    handler(){
        // console.log('listing notes');
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'read title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Reading a note');
        notes.readNote(argv.title);
    }
})
yargs.parse();