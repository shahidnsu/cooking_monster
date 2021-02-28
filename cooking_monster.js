let input = document.getElementById('input-box');
let search = document.getElementById('search-button');

let searchResult = document.getElementById('search-result');
let mainPart =document.getElementById('main-part');

let ul = document.createElement('ul');





// search.addEventListener("click", function()
// {

//     let input = document.getElementById('input-box');
//     ;
    
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.value}`)

//     .then (res => res.json())
//     .then (data => 
//         {
          

        
        
   

    
//     })

search.addEventListener("click",function()
{
    fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.value}`)
    .then (res => res.json())
    .then (data => {

        data.meals.forEach(meal => {

            let mealImage = document.createElement('img');
            let mealName = document.createElement('h2');
            let searchDiv = document.createElement('div');

            //console.log(data);
            
 
            `
            ${searchDiv.classList.add('col-4','d-inline-flex','flex-column','mb-5')};

              
              

              ${mealImage.src = meal.strMealThumb};
              ${mealName.innerText = meal.strMeal};
              ${searchDiv.appendChild(mealImage)};
              ${searchDiv.appendChild(mealName)};

              $


            `
            searchResult.appendChild(searchDiv);



            searchDiv.addEventListener("click",function(){
                ul.innerHTML ='';
              
                let mealId = meal.idMeal
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)

                .then(res => res.json())
                .then(data => {
                    data.meals.forEach(meal =>
                        {
                            

                            ul.innerHTML = `
                            <li>${meal.strIngredient1}</li>
                            <li>${meal.strIngredient2}</li>
                            <li>${meal.strIngredient3}</li>
                            <li>${meal.strIngredient4}</li>
                            <li>${meal.strIngredient5}</li>
                            <li>${meal.strIngredient6}</li>
                            <li>${meal.strIngredient7}</li>
                            
                            `

                            
                           
                         
                        })
                        mainPart.appendChild(ul);
                })
   
                
            
            
            })
            

            
            


            
        });
        
    })
    .catch ( err =>{
        //console.log(err);
        let mainPart = document.getElementById('main-part');
        let notice = document.createElement('h1');
        notice.innerText = 'Sorry we cannot find any recipe';
        notice.style.textAlign ='center';
        notice.style.marginTop = '20px';
        notice.style.color = 'red';
        mainPart.appendChild(notice);
    })
    searchResult.innerHTML ='';
})


