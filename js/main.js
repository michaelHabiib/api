let myRequest = new XMLHttpRequest();
myRequest.open("GET", "main2.json");
myRequest.send()
// console.log(myRequest)

myRequest.onreadystatechange = function () {
    // console.log(myRequest.readyState)
    // console.log(myRequest.status)

    if (myRequest.readyState === 4 && myRequest.status === 200) {
        // console.log(myRequest.responseText)
        let jsData = JSON.parse(myRequest.responseText)
        // console.log(jsData)
        const image = document.querySelector(".image")
        // console.log(image)
        // console.log(jsData.flag)
        image.src = jsData.flag
        const countryNmae = document.querySelector("h2")
        countryNmae.textContent = jsData.countryName
        const countryCapital = document.querySelector(".capital")
        countryCapital.textContent = jsData.capital
        const countryPopulation = document.querySelector("span")
        countryPopulation.textContent = jsData.population
    }
}

