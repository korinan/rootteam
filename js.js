// find element
/*
const banner = document.getElementById('banner');

// change color
banner.style.background = 'pink';

// change text
document.getElementById('banner-text').innerHTML='Team Root';*/

/*
document.getElementById('banner-text').onclick = changeText;   

    function changeText() {
    if
        (banner-text.text = 'Root Team'){
            banner-text.text = 'Root Team 2 ';  
        }
    else 
        (banner-text.text = 'Root Team 2 '){
            banner-text.text = 'Root Team';
        }
    
    }  */ 
    
    
    
    banner.addEventListener('click',()=> {
        console.log('click')
        if (banner.style.backgroundColor === 'rgb(156, 50, 172)'){
            banner.style.backgroundColor = 'rgb(244, 250, 89)'
        }

        else if (banner.style.backgroundColor === 'rgb(244, 250, 89)'){
            banner.style.backgroundColor = 'rgb(156, 50, 172)'
        } 
    })

/*
      document.getElementById('banner-text').onclick = function() {
    this.textContent = 'Team Root 2';

     
} */


/*  Через масив
const banner = document.getElementById('ban');

const colors = ["red", "blue", "yellow"];

banner.addEventListener("click", () => {
    document.style.backgroundColor = colors[getRandomNumber()];
});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}*/



/*
$(document).ready(function () {
    $("#banner").click(function () {
      $("#banner-text").text("Team Root 2");
    } )
  } );   */  

  $(document).ready(function () {
    $("#banner").click(function () {
        $("#banner-text").fadeOut(function () {
            $("#banner-text").text(($("#banner-text").text() == 'Team Root 2 ') ? 'Team Root 3' : 'Team Root 2 ').fadeIn();
        })
    })
});