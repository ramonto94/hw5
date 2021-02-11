function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE


 //ALL RIDES BUTTON
let allFilter = document.querySelector('#all-filter')
// console.log(allFilter)
allFilter.addEventListener('click', async function(event){
event.preventDefault()
console.log('all rides filtered')

let response = await fetch('https://kiei451.com/api/rides.json')
// console.log(response)
let json = await response.json()
// console.dir(json)

document.querySelector('.rides').innerHTML = ''
renderRides(json)
})

//PUPLE RIDES BUTTON

let purpleFilter = document.querySelector('#noober-purple-filter')
// console.log(purpleFilter)
purpleFilter.addEventListener('click', async function(event){
event.preventDefault()
console.log('purple rides filtered')

let response = await fetch('https://kiei451.com/api/rides.json')
// console.log(response)
let json = await response.json()
// console.dir(json)

let purpleArray = []

for (let l= 0; l < json.length; l++){
  let ride = json[l]
   levelOfServiceHeader = levelOfService(ride)
  // console.log(levelOfServiceHeader)
  
  if (levelOfServiceHeader == "Noober Purple"){
    purpleArray.push(ride)
  } 
 }
  document.querySelector('.rides').innerHTML = ''
 renderRides(purpleArray)
})


//POOL RIDES BUTTON

let poolFilter = document.querySelector('#noober-pool-filter')
// console.log(poolFilter)
poolFilter.addEventListener('click', async function(event){
event.preventDefault()
console.log('pool rides filtered')

let response = await fetch('https://kiei451.com/api/rides.json')
// console.log(response)
let json = await response.json()
// console.dir(json)

let poolArray = []

for (let l= 0; l < json.length; l++){
  let ride = json[l]
   levelOfServiceHeader = levelOfService(ride)
  // console.log(levelOfServiceHeader)
  
  if (levelOfServiceHeader == "Noober Pool"){
    poolArray.push(ride)
  } 
 }
  document.querySelector('.rides').innerHTML = ''
 renderRides(poolArray)
})

//XL RIDES BUTTON

let xlFilter = document.querySelector('#noober-xl-filter')
// console.log(xlFilter)
xlFilter.addEventListener('click', async function(event){
event.preventDefault()
console.log('XL rides filtered')

let response = await fetch('https://kiei451.com/api/rides.json')
// console.log(response)
let json = await response.json()
// console.dir(json)

let xlArray = []

for (let l= 0; l < json.length; l++){
  let ride = json[l]
   levelOfServiceHeader = levelOfService(ride)
  // console.log(levelOfServiceHeader)
  
  if (levelOfServiceHeader == "Noober XL"){
    xlArray.push(ride)
  } 
 }
  document.querySelector('.rides').innerHTML = ''
 renderRides(xlArray)
})
 
//X RIDES BUTTON

let xFilter = document.querySelector('#noober-x-filter')
// console.log(xlFilter)
xFilter.addEventListener('click', async function(event){
event.preventDefault()
console.log('X rides filtered')

let response = await fetch('https://kiei451.com/api/rides.json')
// console.log(response)
let json = await response.json()
// console.dir(json)

let xArray = []

for (let l= 0; l < json.length; l++){
  let ride = json[l]
   levelOfServiceHeader = levelOfService(ride)
  // console.log(levelOfServiceHeader)
  
  if (levelOfServiceHeader == "Noober X"){
    xArray.push(ride)
  } 
 }
  document.querySelector('.rides').innerHTML = ''
 renderRides(xArray)
})
  
})


