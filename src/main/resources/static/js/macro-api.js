const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': MACRO_HOST,
    }
};


function getMacros() {
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
        .then((response) => {
                console.log(response);
                let kcal = Math.floor(response.data.calorie);
                let bProtein = Math.floor(response.data.balanced.protein);
                let bCarbs = Math.floor(response.data.balanced.carbs)
                let bFat = Math.floor(response.data.balanced.fat);
                let hProtein = Math.floor(response.data.highprotein.protein);
                let hCarbs = Math.floor(response.data.highprotein.carbs);
                let hFat = Math.floor(response.data.highprotein.fat);
                let lcProtein = Math.floor(response.data.lowcarbs.protein);
                let lcCarbs = Math.floor(response.data.lowcarbs.carbs);
                let lcFat = Math.floor(response.data.lowcarbs.fat);
                let lfProtein = Math.floor(response.data.lowfat.protein);
                let lfCarbs = Math.floor(response.data.lowfat.carbs);
                let lfFat = Math.floor(response.data.lowfat.fat);

                document.querySelector("#results").innerHTML =
                    `<div class="text-center">
                    <h1>Results</h1>
                    <h5>Daily Caloric intake: ${kcal}kcal</h5>
                    </div>
                    <h3 class="text-center">Diets To Choose From</h3>
                    <div id="macros">
                    
                    <div class="diet">
                     <h4 class="diet-name">Balanced diet</h4>
                     <h6>*Daily intake</h6>
                     <p>Protein: <span class="protein">${bProtein}</span>g</p> 
                     <p>Carbs: <span class="carbs">${bCarbs}</span>g</p>      
                     <p>Fat: <span class="fat"> ${bFat}</span>g</p>  
                     <button class="btn btn-dark save" type="button">Save</button>
                   </div>
                   
                   <div class="diet">
                    <h4 class="diet-name">High Protein</h4>
                    <h6>*Daily intake</h6>
                    <p>Protein: <span class="protein">${hProtein}</span>g</p>      
                    <p>Carbs: <span class="carbs">${hCarbs}</span>g</p>      
                    <p>Fat: <span class="fat"> ${hFat}</span>g</p>      
                    <button class="btn btn-dark save" type="button">Save</button>
                   </div>
                   
                   <div class="diet">
                     <h4 class="diet-name">Low Carb</h4>
                     <h6>*Daily intake</h6>
                     <p>Protein: <span class="protein">${lcProtein}g</span</p>      
                     <p>Carbs: <span class="carbs">${lcCarbs}</span>g</p>      
                     <p>Fat: <span class="fat"> ${lcFat}</span>g</p>   
                     <button class="btn btn-dark save" type="button">Save</button>   
                   </div>
                   <div class="diet">
                     <h4 class="diet-name">Low Fat</h4>
                     <h6>*Daily intake</h6>
                     <p>Protein: <span class="protein">${lfProtein}</span>g</p>      
                     <p>Carbs: <span class="carbs">${lfCarbs}</span>g</p>      
                     <p>Fat: <span class="fat"> ${lfFat}</span>g</p>  
                     <button class="btn btn-dark save" type="button">Save</button>    
                   </div>
                   </div>`

            let saveButtons = document.querySelectorAll(".save");
            let proteins = document.querySelectorAll(".protein");
            let carbs = document.querySelectorAll(".carbs");
            let fats = document.querySelectorAll(".fat");
            let diets = document.querySelectorAll(".diet-name");

            let i = 0;
            for(let save of saveButtons){
                console.log(i);
                save.addEventListener("click",()=>{

                    console.log(proteins[0].innerHTML);
                    console.log(carbs[i].innerHTML);
                    console.log(fats[i].innerHTML);
                    console.log(diets[i].innerHTML);
                    console.log(kcal);
                    console.log(goal);



                })
                i++;


            }

            }
        )
        .catch(err => console.error(err));
}


document.querySelector("#calculate-btn").addEventListener("click", getMacros);



