document.querySelector("form").addEventListener("submit", calculateAge);

function calculateAge(event){
    event.preventDefault();
    let form = document.querySelector("form");
    let dob = form.dob.value;

    let [dob_year, dob_month,dob_day] =  dob.split("-").map(Number);
    let today = form.today.value;
    let [today_year, today_month,today_day] =  today.split("-").map(Number);
    today= new Date(today);
    dob  = new Date(dob);
    let res_day = 0;
    let res_month = 0;
    let res_year = 0;




    if(dob_day<today_day || dob_day==today_day){
        res_day = today_day-dob_day;
     
    }else{
        let day = getDays(today.getMonth(), today.getFullYear());
        res_day = (today_day+day)-dob_day;
        today_month  = today_month - 1;
    }

    if(dob_month<today_month || dob_month==today_month ){
        res_month = today_month-dob_month;
  
    }else{
        res_month = (today_month+12)-dob_month;
        today_year = today_year-1;
    }

    res_year = today_year-dob_year;
   


    // Creating Elements for Output
    
    let box = document.querySelector("#calc_container+div");
    box.setAttribute("id", "result");
    let h1 = document.querySelector("#result>h1");

    if(today=="Invalid Date" || dob=="Invalid Date"){
        h1.setAttribute("class","error");
        h1.innerHTML= "Invalid Date Selection !<br \> \' Please Select a correct Date \' ";
  
    }else if (dob_year>today_year){
        h1.setAttribute("class","error");
        h1.innerHTML = "Invalid Date Selection! <br \>\' Year of Birth must be less than Camparing Date \' ";

    }else{
        h1.setAttribute("class","res_title");
        h1.innerText = "Result";
        let p1 = document.querySelector("#result>h1+p");
        p1.innerText= res_year + " Years " + res_month + " Months " + res_day + " Days ";
        p1.setAttribute("class", "date");
        let p2 = document.querySelector("#result>h1+p+p");
        p2.innerText= res_year*12 + res_month + " Months and "+res_day + " Days " ;
        p2.setAttribute("class", "date");
        let p3 = document.querySelector("#result>h1+p+p+p");
        p3.innerText= res_year*365+   res_day;
        
        p3.setAttribute("class", "date");
    }

    


}




// function to get the days in a month

function getDays(month, year){
    //  creating two parameters for 1 for month and 1 for year
    return new Date(year,month,0).getDate();
    // because i want the days of last month and day starts from 1 so 0 will take the last day of previous month. 
    
}

