import fetch from 'node-fetch';
fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(films => {
        films.filter(titles =>  {
            let movieTitles = titles.title;
            console.log(movieTitles)
           
        }) 
    })




    
        

  




        
         

