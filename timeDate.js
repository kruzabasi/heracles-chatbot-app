
function getDateAndTime(which) {

    var currentDate = new Date();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date = currentDate.getDate();
    var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var min = currentDate.getMinutes();
    var def = "th ";
    switch (which) {
        case "date":
            if (date === 3 || date === 23) {
                def = "rd ";
            } else if (date === 1 || date === 21) {
                def = "st ";
            } else if (date === 2 || date === 22) {
                def = "nd ";
            }
            return day[currentDate.getDay()] + ", " + date + def + month[currentDate.getMonth()] + ", " + year;
        case "time":
            return hour + ":" + min;
    }
}