const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': MACRO_HOST,
    }
};




function getMacros(){
    let age = document.querySelector("#age").value + '';
    console.log(age);
    let gender = document.querySelector("#gender").value + '';
    console.log(gender)
    let height = document.querySelector("#height").value + '';
    console.log(height)
    let weight = document.querySelector("#weight").value + '';
    console.log(weight)
    let activityLv = document.querySelector("#activity-lv").value + '';
    console.log(activityLv)
    let goal = document.querySelector("#goal").value + '';
    console.log(goal)

    fetch(`https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLv}&goal=${goal}`, options)
        .then(response => response.json())
        .then(response =>


            console.log(response)


        )
        .catch(err => console.error(err));
}
getMacros();


// document.querySelector("#calculate-btn").addEventListener("click",getMacros)
