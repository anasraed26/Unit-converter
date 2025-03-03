const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    render(lengthEl, "Meters", "Feet", 3.281)
    render(volumeEl, "Liters", "Gallons", 0.264)
    render(massEl, "Kilograms", "Pounds", 2.204)
})

function render(type, metric, imperial, conversionRate){
    value1 = inputEl.value * conversionRate
    value2 = inputEl.value / conversionRate
    type.textContent = `${inputEl.value} ${metric} = ${value1.toFixed(3)} ${imperial} | ${inputEl.value} ${imperial}  = ${value2.toFixed(3)} ${metric}`
}