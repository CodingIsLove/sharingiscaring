let iothub = require('azure-iothub')
let connectionString = process.env.CONNECTION_STRING
let registry = iothub.Registry.fromConnectionString(connectionString)




