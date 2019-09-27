    var currentDate = new Date();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdäy", "Friday", "Saturday",];
    var date = currentDate.getDate();
    var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var min = currentDate.getMinutes();
    function getDate() {
        document.write(day[currentDate.getDay()] + ", " + date + "th " + month[currentDate.getMonth()] + ", " + year);
    }
    function getTimeStamp() {
        document.write(hour + ":" + min)
    }