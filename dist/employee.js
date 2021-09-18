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
        this.employee_wage_array = [];
        this.returnWageArray();
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
        let i;
        for (i = 0; i < this.DAYS_IN_MONTH; i++) {
            this.employee_wage_array.push(this.calculateWage(this.attendanceGenerator()));
        }
    }
    wageUsingForLoop() {
        let total_wage = 0;
        let i;
        for (i = 0; i < this.employee_wage_array.length; i++) {
            total_wage += this.employee_wage_array[i];
        }
        return total_wage;
    }
    wageUsingForEach() {
        let total_wage = 0;
        this.employee_wage_array.forEach((wages) => {
            total_wage += wages;
        });
        return total_wage;
    }
    displayDailyWage() {
        console.log("Day \t|\t Wage");
        console.log("----------------------");
        this.employee_wage_array.map((wages, index) => console.log(index + 1 + " \t|\t " + wages));
    }
    displayFullTimeWage() {
        console.log("Day \t|\t Wage");
        console.log("----------------------");
        this.employee_wage_array.filter((wages, index) => {
            if (wages == 160) {
                console.log(index + 1 + " \t|\t " + wages);
            }
        });
    }
    displayFirstFullTimePay() {
        let isFirst = true;
        this.employee_wage_array.find((wages, index) => {
            if (wages == 160 && isFirst) {
                console.log("The first occurance when Full Time Wage was earned is = " +
                    (index + 1));
                isFirst = false;
            }
        });
    }
    checkFullTimeWage() {
        let isValid = true;
        for (let i = 0; i < this.employee_wage_array.length; i++) {
            if (this.employee_wage_array[i] != 160 &&
                this.employee_wage_array[i] != 80 &&
                this.employee_wage_array[i] != 0) {
                isValid = false;
                break;
            }
        }
        console.log("Every Element of Full Time Wage is truly holding Full time wage = " +
            isValid);
    }
    checkPartTimeWage() {
        let isPartTime = false;
        this.employee_wage_array.find((wages, index) => {
            if (wages == 80 && !isPartTime) {
                isPartTime = true;
            }
        });
        if (isPartTime) {
            console.log("Part Time Wage present: " + isPartTime);
        }
        else {
            console.log("No Part Time Wage");
        }
    }
    totalDays() {
        let days_worked = 0;
        this.employee_wage_array.forEach((wages) => {
            days_worked += wages == 160 ? 1 : wages == 80 ? 0.5 : 0;
        });
        console.log("Total number of days worked = " + days_worked);
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
    //  uc9 - Task_2  Show the Day along with Daily Wage using Array map helper function
    console.log(employee_object.printUC("uc9 - Task_2"));
    employee_object.displayDailyWage();
    //  uc9 - Task_3  Show Days when Full time wage of 160 were earned using filter function
    console.log(employee_object.printUC("uc9 - Task_3"));
    employee_object.displayFullTimeWage();
    //  uc9 - Task_4  Find the first occurrence when Full Time Wage was earned using find function
    console.log(employee_object.printUC("uc9 - Task_4"));
    employee_object.displayFirstFullTimePay();
    //  uc9 - Task_5  Check if Every Element of Full Time Wage is truly holding Full time wage
    console.log(employee_object.printUC("uc9 - Task_5"));
    employee_object.checkFullTimeWage();
    //  uc9 - Task_6  Check if there is any Part Time Wage
    console.log(employee_object.printUC("uc9 - Task_6"));
    employee_object.checkPartTimeWage();
    //  uc9 - Task_7  Find the number of days the Employee Worked
    console.log(employee_object.printUC("uc9 - Task_6"));
    employee_object.totalDays();
}
