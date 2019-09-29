    // var currentDate = new Date();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdäy", "Friday", "Saturday"];
    // var date = currentDate.getDate();
    var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // var year = currentDate.getFullYear();
    // var hour = currentDate.getHours();
    // var min = currentDate.getMinutes();
    function getDate() {

        document.getElementById('date').innerHTML = day[new Date().getDay()] + " , " + month[new Date().getMonth()] + " , " + new Date().getFullYear();
    }
    function getTimeStamp() {
        document.getElementById('time').innerHTML = new Date().getHours() + ":" + addZero(new Date().getMinutes());
    }
    function addZero(minute){ //incase minute is returned as a single number, add a '0' to it as prefix
        if (minute < 10)
        {
            return ("0"+minute); 
        }
        else{            
            return minute;
        }
    }