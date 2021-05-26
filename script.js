let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load(){
    const dt = new Date();

    //console.log(dt);
    const day = dt.getDate();
    const month = dt.getMonth();//index value
    const year = dt.getFullYear();


    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate() //shows the last date of the month
    

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {

        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    

    });
    console.log(dateString);
    
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText =
     `${dt.toLocaleDateString('en-us', { month: `long` })} ${year}`;   

    for (let i = 1; i < paddingDays + daysInMonth; i++){

        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;

            daySquare.addEventListener('click', () => console.log('clickomode'));

        } else {
            daySquare.classList.add('padding');


        }

        calendar.appendChild(daySquare);

    }

}

load();