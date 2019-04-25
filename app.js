const request=require('request');
const geoCode=require('./utils/geoCode')
const forcast=require('./utils/forcast')
const address=process.argv[2]
if(!address){
    console.log('no matching address')
}else{
    geoCode(address,(error,{latitude,longitude,location})=>{
        if(error){
            return console.log(error)
        }
       
        forcast(latitude, longitude, (error, forcastdata) => {
            if(error){
              return  console.log(error)
            }
            console.log(location);
            console.log(forcastdata)
            
          })
        })
    
        
}
// const url='https://api.darksky.net/forecast/53cd88360485afc9d63b0617f67e7743/37.8267,-122.4233'
//  request({url:url,json:true},(err,resp)=>{
//     // const data=resp.body.currently
   
//     if(err){
//         console.log('Please check the internet')
//     }else if(resp.body.error){

//         console.log('unable to find location')
//     }
    
//     else{
//              console.log(resp.body.daily.data[0].summary +'  It is currently  '+  resp.body.currently.temperature+ '  degrees out. There is a  '+ resp.body.currently.precipProbability + '% chance of rain')

//     }
//     console.log(data)
//     console.log(resp.body.daily.data[0].summary +'  It is currently  '+  resp.body.currently.temperature+ '  degrees out. There is a  '+ resp.body.currently.precipProbability + '% chance of rain')
// })
// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3JpbmF0aGNvcGVuaGFnZW4iLCJhIjoiY2p1c2JqaTBsMDJlejQ0cDJsZjRrYnJ1NiJ9.9cGLlyheRCK8u6lg641DAA&limit=1';
// request({url:geocodeURL,json:true},(error,response)=>{
// if(error){
// console.log('unable to connect')
// }else if(response.body.features.length===0){
//     console.log('No matching city')


// }

// else{
//     const latitude=response.body.features[0].center[0]
//     const langitude=response.body.features[0].center[1]
//     console.log(latitude,langitude)

// }
//     })
