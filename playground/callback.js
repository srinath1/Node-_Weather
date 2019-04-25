// // const geoCode=(add,cb)=>{

// //     setTimeout(()=>{
// //         const data={
// //             lat:0,
// //             lon:0
// //         }
// //         cb(data)
// //     },2000)
// // }
// // geoCode('hyd',(data)=>{
// //     console.log(data)
// // })
// const add=(a,b,cb)=>{

//     setTimeout(()=>{
//         var d=a+b
// cb(d)

//     },2000)
// }

// add(1,2,(sum)=>{
//     console.log(sum)
// })

const https=require('https')
const url='https://api.darksky.net/forecast/53cd88360485afc9d63b0617f67e7743/40';
const request=https.request(url,(response)=>{
let data=''
   response.on('data',(chunk)=>{
       data=data+chunk.toString()
console.log(data)
    })
    response.on('end',()=>{
const body=JSON.parse(data);
console.log(body)
    })
})
request.on('error',(error)=>{
    console.log('An error',error)
})
request.end()