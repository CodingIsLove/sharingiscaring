const {BlobServiceClient,ContainerClient} = require('@azure/storage-blob')
const {v1: uuidv1} = require('uuid')
require('dotenv').config()

const containerName = 'abeeway-db'
const blobName = '0_97ba02c0f3f54c3199a83cf6c09cc033_1'
const connString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const blobServiceClient = BlobServiceClient.fromConnectionString(connString)
const containerClient = blobServiceClient.getContainerClient(containerName)
const blockBlobClient = containerClient.getBlockBlobClient(blobName)



async function main() {
    console.log('Azure Blb storage v12 - JS quickstart sample')

    // List the blobs inside the container
    for await (const blob of containerClient.listBlobsFlat()){
        //console.log(blob)
    }

    // Download Blobs
    const downloadBlockBlobResponse = await blockBlobClient.download(0)
    console.log(`${await streamToString(downloadBlockBlobResponse.readableStreamBody)}`)
}

// A helper function used to read a Node.js readable stream into a string
async function streamToString(readableStream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        readableStream.on("data", (data) => {
            chunks.push(data.toString());
        });
        readableStream.on("end", () => {
            resolve(chunks.join(""));
        });
        readableStream.on("error", reject);
    });
}
main().then(()=> console.log('Done')).catch((ex) => console.log(ex.message))
