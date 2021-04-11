function submitFunction(){
    checkDate();
    // console.log(date);


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

        
