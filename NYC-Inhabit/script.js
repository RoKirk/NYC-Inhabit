//This is my QueryString; it is stored in "apiUrl" for further use and access.
const apiUrl = "https://data.cityofnewyork.us/resource/6bic-qvek.json?jurisdiction_name=";
// console.log(apiUrl)


//I need to access #zip & button tag...
let userSearch = document.querySelector("#search-bar")
let submitButton = document.querySelector("button")


//Time to create a function that triggers when "click" occurs; this function should accept the ".value" of "userSearch" and send as QueryString... ... ...?
// Created a function to prevent page from reloading everytime we click(event.preventDefault()); Established my Query String, to include the API as well as the value of "userSearch"--which is the value of the already declared "searchbar".
// This function then returns "queryString". 
function myFunction() {
    event.preventDefault()
    let queryString = apiUrl + userSearch.value;
    return queryString
}


const renderResults = (results) => {
    console.log(results.data[0])

    let data = document.querySelector("#data-row");
    data.innerHTML = results.data[0].percent_female + '</br>' + results.data[0].percent_male + '</br>' + results.data[0].percent_gender_total;
    console.log(data)

    let titles = document.querySelector("#title-row")
    titles.innerHTML = "Female Percent" + "</br>" + "Male Percent" + "</br>" + "Total";
    console.log(titles)
}

const collectResults = async () => {
    try {
        // let valueFemale = document.querySelector("#row1value")
        // valueFemale.append(queryString)
        // This is my query string for my API.
        // Construct your query string for your API and store it in queryString
        // You may like to console.log your query string after you have stored it so you can see what it looks like
        // let queryString = baseURL + value
        // Take the query string you just constructed and give it to axios.
        // Axios will give you back the data and you are storing it in the result variable
        let resultsFromAxios = await axios.get(myFunction()) /*to the API and give you back the data results*/
        // Sends results data to the renderResults function declared above
        renderResults(resultsFromAxios)
    } catch (error) {
        console.log(`Oops! There was an error: ${error}`)
    }
}
console.log(renderResults)
//Add an Event Listener to "#zip" so that when "click" occurs... "myFunction" is ran.
submitButton.addEventListener("click", collectResults);
// // Call the collectResults function and give it some data dymanically
// // because i have declared (stockSymbol) as a parameter, the string "msft" will get stored in (stockSymbol) on this specific call to the function
// collectResults(queryString)
// // I can give it a different stock symbol on this line!




