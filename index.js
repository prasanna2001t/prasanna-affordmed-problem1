const { log } = require('console')
const express=require('express')
const app=express()
const http=require('http')
var count = 0;
var array=[];
var outputArray = [];
var start = false;
app.route('/').get((req,res)=>{
http.get('http://localhost:8090/primes&url=http://anything.com/fibo&url=http://localhost:8090/odd&url=http.localhost:8090/rand',function(response){
    response.on("data",(data)=>{
     
        array.push(JSON.stringify(data))
        console.log(array)
     
    for (j = 0; j < array.length; j++) {
            for (k = 0; k < outputArray.length; k++) {
                if ( array[j] == outputArray[k] ) {
                    start = true;
                }
            }
            count++;
            if (count == 1 && start == false) {
                outputArray.push(array[j]);
                res.send(outputArray)
            }
            start = false;
            count = 0;

        }
        
    })

})

})

app.listen(3000)