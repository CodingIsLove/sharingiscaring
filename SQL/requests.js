const {Connection, Request} = require("tedious");

const connect2db = function(){
// Create connection to database
    const connectionConfig = {
        authentication: {
            options: {
                userName: process.env.DB_USERNAME, // update me
                password: process.env.DB_PASSWORD // update me
            },
            type: "default"
        },
        server: process.env.DB_SERVER,
        options: {
            database: process.env.DB_NAME, //update me
            encrypt: true
        }
    };
    console.log("Try to create a new connection")
   return new Connection(connectionConfig);
}

const createSleepTables = function(connection){
    const sleepTable ='Sleep'
    const sql_sleep = `CREATE TABLE ${sleepTable} (c1 int UNIQUE);`
    const sleepTableRequest = new Request(sql_sleep, (err, rowCount)=> {
        if (err){
            console.error('error occured')
            throw err;
        }
        console.log(`${sleepTable} created` )
    })
    connection.execSql(sleepTableRequest)
}

const createBlockTimesTable = function (connection){
    const blockTimeTable ='BlockTimes'
    const sql_blockTimes= `CREATE TABLE ${blockTimeTable} (c1 int UNIQUE);`
    const blockTimeRequest= new Request(sql_blockTimes, (err, rowCount)=> {
        if (err){
            console.error('error occured')
            throw err;
        }
        console.log(`${blockTimeTable} created` )
    })
    connection.execSql(blockTimeRequest)
}

const setupDb = function (connection){
    const blockTimeTable ='BlockTimes'
    const sql_blockTimes= `
        DROP TABLE table1;
        DROP TABLE table2;
        CREATE TABLE table1  (c1 int UNIQUE);
        CREATE TABLE table2 (c1 int UNIQUE);
        `
    const blockTimeRequest= new Request(sql_blockTimes, (err, rowCount)=> {
        if (err){
            console.error('error occured')
            throw err;
        }
        console.log(`${blockTimeTable} created` )
    })
    connection.execSql(blockTimeRequest)
        .then(()=>{
            console.log('time to close the connection')
            connection.close()
        })
}

const wipeDb = function (){
    //todo
    return 0
}

const createDefaultEntries = function (){
    // todo
    return 0
}

const printDb = function (){
    //todo
    return 0
}


exports.con2db = connect2db
exports.wipeDb = wipeDb
exports.createBlockTimeTables = createBlockTimesTable
exports.createSleepTables = createSleepTables
exports.defaultEntries = createDefaultEntries
exports.printDb = printDb
exports.setupDb = setupDb
