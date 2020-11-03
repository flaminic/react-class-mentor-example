
fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`
  )
.then((res) => res.json())
.then((data) => {
    console.log(data)
})
.catch((error) => console.log("Oh no"));


console.log("in the mean time i'm looking at facebook")