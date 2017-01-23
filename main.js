
/*
 * Falsy Values
 */

// Empty strings: ""
// Number 0: 0
// false
// null
// undefined
// NaN

// if(NaN){
//   console.log('true');
// }else{
//   console.log('false');
// }

/*
 * Arrays
 */

 var cars = ['Honda', 'Dodge', 'Ford', 'Tesla', 'Subaru'];

// for(var i = 0; i < cars.length; i++){
//   console.log('I like: ' + cars[i]);
// }
// var locationOfSubaru = cars.indexOf('Subaru');
// console.log('I like: ' + cars[locationOfSubaru]);

for(var i = 0; i < cars.length; i++){
  if(cars[i] == 'Subaru'){
    console.log('I like: ' + cars[i]);
  }
}

// Console.log all the even numbers from 1 to 10

for(var counter = 1; counter <= 10; counter++){
  if(counter % 2 === 0){
    console.log(counter);
  }
}

for(var counter = 0; counter <= 10; counter = counter + 2){
  if(counter){
    console.log(counter);
  }
}

var movies = ['Apollo 13', 'My Cousin Vinny'];

// movies[0]
// movies[1]
for(var i = 0; i < movies.length; i++){
  console.log('I like    ' + movies[i]);
}

/*
 * Objects
 */

var pickupTruck = {
  doors: 2,
  seats: 1,
  color: 'white',
  hauling: ['lumber', 'mulch', 'sand']
};

pickupTruck['doors']

console.log('Number of doors:', pickupTruck['doors']);
console.log('Color:', pickupTruck.color);

for(var i = 0; i < pickupTruck.hauling.length; i++){
  console.log(pickupTruck.hauling[i]);
}
