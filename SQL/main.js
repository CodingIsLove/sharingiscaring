const {con2db, setupDb, wipeDb, createSleepTables,createBlockTimeTables,defaultEntries, printDb} = require('./requests')
const {Request} = require('tedious')
require('dotenv').config()

const connection = con2db()

connection.on("connect", err => {
    if (err) {
        console.log("Uuups there went something wrong")
        console.error(err.message);
    } else {
        setupDb(connection)
        //createSleepTables(connection)
        //queryDatabase()
        //createBlockTimeTables(connection)
        //wipeDb()
        //defaultEntries()
        //printDb()
        //queryDatabase();
    }
});


function queryDatabase() {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        `SELECT TOP 20 pc.Name as CategoryName,
                   p.name as ProductName
     FROM [SalesLT].[ProductCategory] pc
     JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }
    );

    request.on("row", columns => {
        columns.forEach(column => {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });

    connection.execSql(request);
}

connection.connect()
