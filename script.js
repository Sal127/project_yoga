window.addEventListener('DOMContentLoaded', function() {  //DOMContentLoaded это событие срабатывает тогда когда полностью загрузилась DOM структура нашего докумен т.е. все теги все стоит на своих местах

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    //Реализуем функцию которая будет скрывать табы
    function hideTabContent(a) {  //a - это технический аргумент
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

    //Timer
    let deadline = '2021-12-12';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // Расчет разницы даты между дедлайном и текущей датой в количестве миллисекунд
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t/(1000*60*60)));
        //days = Math.floor((t/1000/60)%24)  //Расчет количества дней

        return {    //Функция возвращает объект, создаем объект
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,

        };
    }
    //Создаем функцию которая превращает статическую верстку таймера в динамическую
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            //Рабочий говнокод добавления нуля перед цифрой
            // t.seconds = '' + t.seconds;
            // t.minutes = '' + t.minutes;
            // t.hours = '' + t.hours;
            // if (t.seconds.length == 1) {
            //     t.seconds = '0' + t.seconds;
            //     seconds.textContent = t.seconds;
            // };
            // if (t.minutes.length == 1) {
            //     t.minutes = '0' + t.minutes;
            //     minutes.textContent = t.minutes;
            // };
            // if (t.hours == 1 ) {
            //     t.hours = '0' + t.hours;
            //     hours.textContent = t.hours; 
            // }; 
            function addZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';    
            }
        }    
    }

    setClock('timer', deadline); //timer это id из верстки 
});