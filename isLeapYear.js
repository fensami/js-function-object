function isLeapYear (year){
    const remainder = year % 4;

    if(remainder === 0){
        // console.log('your year is leap year')
        return true;
    }
    else{
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(2018);
console.log(isMyYearLeapYear);