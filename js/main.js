(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');  
        }
    }
}()); 


// сомовызывающеяся функция, которая отработает как только распарсится js документ. В данном случае ф-я вызовет сама себя 

//и код внутри нее отработает сразу при загрузке main.js

// Burger handler

(function (){
    const burgerItem = document.querySelector('.burger');
    burgerItem.addEventListener('click', () => {
        
    });

}());


