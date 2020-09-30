// Setup Arreglos Dipper
var myStorage = {
   "car":{
       "inside":{
           "glove box":"maps",
           "passenger seat":"crumbs"
       },
       "outside":{
           "trunk":"jack"
    }
   }
};
// var gloveBoxContents = undefined; // change this line
var gloveBoxContents = myStorage.car.inside["glove box"]; // change this line

console.log(gloveBoxContents)