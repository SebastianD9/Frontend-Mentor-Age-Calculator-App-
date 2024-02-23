const userYear = document.querySelector("#userYear")
const userDay = document.querySelector("#userDay")
const userMonth = document.querySelector("#userMonth")
const submit = document.querySelector("#submit");
const yearsCalc = document.querySelector('#years');
const monthCalc = document.querySelector('#months');
const daysCalc = document.querySelector('#days');

const yearError = document.querySelector('.yearE');
const monthError = document.querySelector('.monthE');
const dayError = document.querySelector('.dayE');

function calculate() {
    
    let year = userYear.value;
    let day = userDay.value;
    let month = userMonth.value;

    let today = new Date();
    let nowYear = today.getFullYear();
    let nowMonth = today.getMonth() +1;
    let nowDay = today.getDate();

    function empty() {
        yearsCalc.innerText = '- -';
        monthCalc.innerText = '- -';
        daysCalc.innerText = '- -';
    }

    function checkYear() {
        if (year>nowYear || year===''){
            yearError.innerText = 'Must be in the past';
            yearError.classList.add('error');
            yearError.closest('div').classList.add('Errors');
            empty();
            return false;
        }
        else {
            yearError.innerText = '';
            yearError.classList.remove('error');
            yearError.closest('div').classList.remove('Errors');
            return true;
        }
    }
    function checkMonth(){
        if (month>12 || month<=0 || month===''){
            monthError.innerText = 'Must be a valid month';
            monthError.classList.add('error');
            monthError.closest('div').classList.add('Errors');
            empty();
            return false;
        }
        else {
            monthError.innerText = '';
            monthError.classList.remove('error');
            monthError.closest('div').classList.remove('Errors');
            return true;
        }
    }

    function checkDay() {
        if (day<=0 || day==='' || day>getDaysInMonth(year, month)){
            dayError.innerText ='Must be a valid day';
            dayError.classList.add('error');
            dayError.closest('div').classList.add('Errors');
            empty();
            return false;
        }
        else {
            dayError.innerText = '';
            dayError.classList.remove('error');
            dayError.closest('div').classList.remove('Errors');
            return true;
        }
    }
    checkDay();
    checkMonth();
    checkYear();
    function getDaysInMonth(year, month) {
        console.log(new Date(year, month, 0).getDate());
        return new Date(year, month, 0).getDate();
        
    }
   // getDaysInMonth(year, day);
    if ((checkDay()===true) && (checkMonth()===true) && (checkYear()===true)){

    let calculateDay, calculateMonth, calculateYear;

    calculateYear = nowYear - year;

    if (nowMonth>=month){
        calculateMonth = nowMonth - month;
    }
    else {
        calculateYear--;
        calculateMonth = 12 + nowMonth - month;
    }
    if (nowDay>=day){
        calculateDay = nowDay - day;
    }
    else {
        calculateMonth--;
        calculateDay = getDaysInMonth(year, day) + nowDay - day;
    }
    
    if (calculateMonth <0){
        calculateMonth = 11;
        calculateYear--;
    }

    yearsCalc.innerHTML = calculateYear;
    monthCalc.innerHTML = calculateMonth;
    daysCalc.innerHTML = calculateDay;
    }
}


submit.addEventListener('click', calculate);
