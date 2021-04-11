function submitFunction(){
    checkDate();
    checkMonth();
    checkYear();
    checkGender();


}

function checkDate(){
    var date = document.getElementById("date").value;
    console.log(date);
    if (date) {
        if (date>=1 && date<=31) {
            return date;
        }
        else{
            alert("date should be between 1-31");
        }
    }else{
        alert("enter a valid date")

    }
    

        
        
    }

    function checkMonth(){
        var month = document.getElementById("month").value;
        console.log(month);
        if (month) {
            if (month>=1 && month<=12) {
                return month;
            }
            else{
                alert("month should be between 1-12");
            }
        }else{
            alert("enter a valid month")
    
        }
        }

        function checkYear(){
            var year = document.getElementById("year").value;
            console.log(year);
            if (year) {
                if (year>=1000 && year<=9999) {
                    return year;
                }
                else{
                    alert("year should be between 1000-9999");
                }
            }else{
                alert("enter a valid year")
        
            }
            }

            function checkGender(){
                var gender = document.getElementById("pickGender").value;
                console.log(gender);
                if (gender) {
                    if (gender=="male" || gender=="female") {
                        return gender;
                    }
                    else{
                        alert("gender should be between male and female");
                    }
                }else{
                    alert("enter a valid gender")
            
                }
                }

                
    

        
