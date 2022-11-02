/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById('convert-btn')
const input = document.getElementById('number')
const length = document.getElementById('length-conversion')
const volume = document.getElementById('volume-conversion')
const mass = document.getElementById('mass-conversion')
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204


// paragraphs should change to
button.addEventListener('click', function () {
    let baseValue = input.value
length.innerHTML = `${baseValue} meter = ${baseValue * meterToFeet} feet`

volume.innerHTML = `${baseValue} liter = ${baseValue * literToGallon} gallon`

mass.innerHTML = `${baseValue} kilogram = ${baseValue * kilogramToPound} pound`
})
