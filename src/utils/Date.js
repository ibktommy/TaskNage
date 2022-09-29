// Function to Get the Current Date
const date = new Date();

let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let day = date.getDate()
let month = monthName[date.getMonth()].slice(0, 3)
let year = date.getFullYear()

let currentDate = `${day} ${month}, ${year}.`

export default currentDate
