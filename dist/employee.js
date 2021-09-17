"use strict";
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
{
    //  uc1 - Print welcome message & Check employee attendance
    console.log(printUC("uc1"));
    console.log(greet());
    console.log("Checking attendance: " + checkAttendance(attendanceGenerator()));
}
