const AWS = require('aws-sdk')
const dotenv = require('dotenv')
dotenv.config();

let s3 = new AWS.S3({
    region: 'us-east-2',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey:  process.env.SECRET_ACCESS_KEY
})

s3.deleteObject({
    Bucket: 'my-new-bucket-from-sdk-in-the-us-east2',
    Key: 'text-file.txt',
}, (error, success) => {
    if(error){
        console.log(error)
    }else{
        console.log(success)
    }
})