function monthName(num){
    if(num > 12 && num < 1){
        return "Invalid Month Number";
    }else{
        if(num == 1){
            return "January";
        }else if(num == 2){
            return "February";
        }else if(num == 3){
            return "March";
        }else if(num == 4){
            return "April";
        }else if(num == 5){
            return "May";
        }else if(num == 6){
            return "June;"
        }else if(num == 7){
            return "July";
        }else if(num == 8){
            return "August";
        }else if(num == 9){
            return "September";
        }else if(num == 10){
            return "October";
        }else if(num == 11){
            return "November";
        }else if(num == 12){
            return "December";
        }
    }
}

console.log(monthName(2));