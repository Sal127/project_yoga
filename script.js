window.addEventListener('DOMContentLoaded', function() {  //DOMContentLoaded это событие срабатывает тогда когда полностью загрузилась DOM структура нашего докумен т.е. все теги все стоит на своих местах

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    //Реализуем функцию которая будет скрывать табы
    function hideTabContent(a) {  //a это технический аргумент
        for (let i=a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide'); // в классе hide (это в css файле) указано display: none; поэтому скрывает таб
        }
    };
    
    hideTabContent(1); //ставим 1 тогда первый таб будет виден

    //Реализуем функцию которая будет показывать таб контент
    function showTabContent(b) {
       if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');  
       } 
    };

    info.addEventListener('click', function(event) {
        let target = event.target;
        //здесь применяем делегирование событий
        if (target && target.classList.contains('info-header-tab')) {
            for(let i=0; i < tab.length; i++) {
                if (target == tab[i]) {
                    console.log(target);
                    console.log(tab[i]);
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        } 
    });    

});