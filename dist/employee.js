"use strict";
{
    const PART_TIME_WAGE = 4;
    const FULL_TIME_WAGE = 8;
    const WAGE_PER_HOUR = 20;
    const DAYS_IN_MONTH = 20;
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
    function returnFullTimeWage() {
        return FULL_TIME_WAGE * WAGE_PER_HOUR;
    }
    function returnPartTimeWage() {
        return PART_TIME_WAGE * WAGE_PER_HOUR;
    }
    function calculateWage(attendace) {
        switch (attendace) {
            case 0:
                return returnPartTimeWage();
                break;
            case 1:
                return returnFullTimeWage();
                break;
            case 2:
                return 0;
                break;
            default:
                return 0;
        }
    }
    function calculateMonthlyWage(restricted) {
        let current_day = 0;
        let current_employee_wage = 0;
        let employee_monthly_wage = 0;
        let total_hours = 0;
        restricted = restricted == null ? Number.MAX_VALUE : restricted;
        while (total_hours <= restricted && current_day < DAYS_IN_MONTH) {
            current_employee_wage = calculateWage(attendanceGenerator());
            total_hours += current_employee_wage / WAGE_PER_HOUR;
            if (total_hours > restricted) {
                break;
            }
            employee_monthly_wage += current_employee_wage;
            current_day += 1;
        }
        return employee_monthly_wage;
    }
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
        //  uc4 -   Calculating employee wage using switch
        console.log(printUC("uc4"));
        console.log("Employee wage: " + calculateWage(attendanceGenerator()));
        //  uc5 -   Calculate monthly wage
        console.log(printUC("uc5"));
        console.log("Employee monthly wage: " + calculateMonthlyWage());
        //  uc6 -   Calculate monthly wage for restricted hours
        console.log(printUC("uc6"));
        console.log("Employee monthly wage: " + calculateMonthlyWage(20));
    }
}
class Employee {
    constructor() {
        this.PART_TIME_WAGE = 4;
        this.FULL_TIME_WAGE = 8;
        this.WAGE_PER_HOUR = 20;
        this.DAYS_IN_MONTH = 20;
    }
    printUC(uc) {
        return `------------------------${uc}------------------------`;
    }
    greet() {
        return "Welcome to employee wage computation";
    }
    attendanceGenerator() {
        return Math.floor((Math.random() * 10) % 3);
    }
    checkAttendance(attendace) {
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
    returnFullTimeWage() {
        return this.FULL_TIME_WAGE * this.WAGE_PER_HOUR;
    }
    returnPartTimeWage() {
        return this.PART_TIME_WAGE * this.WAGE_PER_HOUR;
    }
    calculateWage(attendace) {
        switch (attendace) {
            case 0:
                return this.returnPartTimeWage();
                break;
            case 1:
                return this.returnFullTimeWage();
                break;
            case 2:
                return 0;
                break;
            default:
                return 0;
        }
    }
    calculateMonthlyWage(restricted) {
        let current_day = 0;
        let current_employee_wage = 0;
        let employee_monthly_wage = 0;
        let total_hours = 0;
        restricted = restricted == null ? Number.MAX_VALUE : restricted;
        while (total_hours <= restricted && current_day < this.DAYS_IN_MONTH) {
            current_employee_wage = this.calculateWage(this.attendanceGenerator());
            total_hours += current_employee_wage / this.WAGE_PER_HOUR;
            if (total_hours > restricted) {
                break;
            }
            employee_monthly_wage += current_employee_wage;
            current_day += 1;
        }
        return employee_monthly_wage;
    }
    returnWageArray() {
        let wage_array = [];
        let i;
        for (i = 0; i < this.DAYS_IN_MONTH; i++) {
            wage_array.push(this.calculateWage(this.attendanceGenerator()));
        }
        return wage_array;
    }
    wageUsingForLoop() {
        let wage_array = this.returnWageArray();
        let total_wage = 0;
        let i;
        for (i = 0; i < wage_array.length; i++) {
            total_wage += wage_array[i];
        }
        return total_wage;
    }
    wageUsingForEach() {
        let wage_array = this.returnWageArray();
        let total_wage = 0;
        wage_array.forEach((wages) => {
            total_wage += wages;
        });
        return total_wage;
    }
}
{
    //  uc7 -   Create employee class
    let employee_object = new Employee();
    console.log(employee_object.printUC("uc7"));
    console.log("Employee class created");
    //  uc8 -   Calculate total wage using array
    console.log(employee_object.printUC("uc8"));
    console.log("Employee wage using array: " + employee_object.wageUsingForLoop());
    //  uc9 - Task_1  Calculate total Wage using array forEach
    console.log(employee_object.printUC("uc9 - Task_1"));
    console.log("Employee wage using forEach: " + employee_object.wageUsingForEach());
}
