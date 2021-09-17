"use strict";
const PART_TIME_WAGE = 4;
const FULL_TIME_WAGE = 8;
const WAGE_PER_HOUR = 20;
function printUC(uc) {
    return `------------------------${uc}------------------------`;
}
function greet() {
    return "Welcome to employee wage computation";
}
function attendanceGenerator() {
    return Math.floor((Math.random() * 10) % 3);
}
function checkAttendance(attendace) {
    switch (attendace) {
        case 0:
            return "Part time employee";
            break;
        case 1:
            return "Full time employee";
            break;
        case 2:
            return "Absent employee";
            break;
        default:
            return "In default case";
    }
}
function returnFullTimeWage() { return FULL_TIME_WAGE * WAGE_PER_HOUR; }
function returnPartTimeWage() { return PART_TIME_WAGE * WAGE_PER_HOUR; }
{
    //  uc1 -   Print welcome message & Check employee attendance
    console.log(printUC("uc1"));
    console.log(greet());
    console.log("Checking attendance: " + checkAttendance(attendanceGenerator()));
    //  uc2 -   Calculate full time wage
    console.log(printUC("uc2"));
    console.log("Full time wage: " + returnFullTimeWage());
    //  uc3 -   Calculate part time wage
    console.log(printUC("uc3"));
    console.log("Part time wage: " + returnPartTimeWage());
}
