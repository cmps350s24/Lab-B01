// references to the elements that we will be interacting with

const regionBaseURL = "https://restcountries.com/v3.1/region/"

const regionDD = document.querySelector("#region")
const countryDD = document.querySelector("#country")

regionDD.addEventListener('change', handleRegionChange)

function handleRegionChange() {
    const url = `${regionBaseURL}${regionDD.value}`
    const data = fetch(url)
    console.log(data);
}