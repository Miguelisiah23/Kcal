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

                document.querySelector("#save-form").innerHTML =
                    `<div class="text-center">
                    <h1>Results</h1>
                    <h5>Daily Caloric intake: ${kcal}kcal</h5>
                    </div>
                    <h3 class="text-center">Diets To Choose From</h3>
                    <div id="macros">
                    <div class="diet">
                    
                     <h4>Balanced diet</h4>
                     <input type="hidden" id="diet" name="diet" value="balanced diet">
                     <input type="hidden" id="kcal" name="kcal" value="${kcal}">
                     <h6>*Daily intake</h6>
                     <p>Protein: ${bProtein}g</p>  
                     <input type="hidden" id="bProtein" name="protein" value="${bProtein}">    
                     <p>Carbs: ${bCarbs}g</p>      
                     <input type="hidden" id="bcarbs" name="carbs" value="${bCarbs}">
                     <p>Fat: ${bFat}g</p>  
                     <input type="hidden" id="bFat" name="fat" value="${bFat}">
                    
                     <button class="btn btn-dark" type="submit">Save</button>
                        
                   </div>
                   <div class="diet">
                    <h4>High Protein</h4>
                    <h6>*Daily intake</h6>
                    <p>Protein: ${hProtein}g</p>      
                    <p>Carbs: ${hCarbs}g</p>      
                    <p>Fat: ${hFat}g</p>      
                   </div>
                   <div class="diet">
                     <h4>Low Carb</h4>
                     <h6>*Daily intake</h6>
                     <p>Protein: ${lcProtein}g</p>      
                     <p>Carbs: ${lcCarbs}g</p>      
                     <p>Fat: ${lcFat}g</p>      
                   </div>
                   <div class="diet">
                     <h4>Low Fat</h4>
                     <h6>*Daily intake</h6>
                     <p>Protein: ${lfProtein}g</p>      
                     <p>Carbs: ${lfCarbs}g</p>      
                     <p>Fat: ${lfFat}g</p>      
                   </div>
                   </div>`

            }
        )
        .catch(err => console.error(err));
}


document.querySelector("#calculate-btn").addEventListener("click", getMacros)
