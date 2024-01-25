/*
1 meter = 3.281 feet
1 liter = 0.219969 gallon
1 kilogram =  2.205 pound
*/

let data = document.getElementById("data")
let valueEl = document.getElementById("value-el")
let convertLength = document.getElementById("convert-length")
let convertVolume = document.getElementById("convert-volume")
let convertMass = document.getElementById("convert-mass")
const convert = document.getElementById("convert")


convert.addEventListener("click", function() {
    let mToF = valueEl.value * 3.281
    let tToM = valueEl.value / 3.281
    let lToG = valueEl.value * 0.219969
    let gToL = valueEl.value / 0.219969
    let kToP = valueEl.value *  2.205
    let pToK = valueEl.value /  2.205
    convertLength.innerHTML = `${valueEl.value} meters = ${mToF.toFixed(3)} feet | ${valueEl.value} feet = ${tToM.toFixed(3)} meters`
    convertVolume.innerHTML = `${valueEl.value} litres = ${lToG.toFixed(3)} gallons | ${valueEl.value} gallons = ${gToL.toFixed(3)} litres`
    convertMass.innerHTML = `${valueEl.value} kilos = ${kToP.toFixed(3)} pounds | ${valueEl.value} pounds = ${pToK.toFixed(3)} kilos`
})
