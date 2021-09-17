{
  const PART_TIME_WAGE: number = 4;
  const FULL_TIME_WAGE: number = 8;
  const WAGE_PER_HOUR: number = 20;
  const DAYS_IN_MONTH: number = 20;

  function printUC(uc: string): string {
    return `------------------------${uc}------------------------`;
  }

  function greet(): string {
    return "Welcome to employee wage computation";
  }

  function attendanceGenerator(): number {
    return Math.floor((Math.random() * 10) % 3);
  }

  function checkAttendance(attendace: number): string {
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

  function returnFullTimeWage(): number {
    return FULL_TIME_WAGE * WAGE_PER_HOUR;
  }

  function returnPartTimeWage(): number {
    return PART_TIME_WAGE * WAGE_PER_HOUR;
  }

  function calculateWage(attendace: number): number {
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

  function calculateMonthlyWage(restricted?: number): number {
    let current_day: number = 0;
    let current_employee_wage: number = 0;
    let employee_monthly_wage: number = 0;
    let total_hours: number = 0;
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
    console.log(
      "Checking attendance: " + checkAttendance(attendanceGenerator())
    );

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

interface EmployeeInterface {
  PART_TIME_WAGE: number;
  FULL_TIME_WAGE: number;
  WAGE_PER_HOUR: number;
  DAYS_IN_MONTH: number;

  printUC(uc: string): string;
  greet(): string;
  attendanceGenerator(): number;
  checkAttendance(attendace: number): string;
  returnFullTimeWage(): number;
  returnPartTimeWage(): number;
  calculateWage(attendace: number): number;
  calculateMonthlyWage(restricted?: number): number;
}

class Employee implements EmployeeInterface {
  readonly PART_TIME_WAGE = 4;
  readonly FULL_TIME_WAGE = 8;
  readonly WAGE_PER_HOUR = 20;
  readonly DAYS_IN_MONTH = 20;

  constructor() {}

  printUC(uc: string): string {
    return `------------------------${uc}------------------------`;
  }

  greet(): string {
    return "Welcome to employee wage computation";
  }

  attendanceGenerator(): number {
    return Math.floor((Math.random() * 10) % 3);
  }

  checkAttendance(attendace: number): string {
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

  returnFullTimeWage(): number {
    return this.FULL_TIME_WAGE * this.WAGE_PER_HOUR;
  }

  returnPartTimeWage(): number {
    return this.PART_TIME_WAGE * this.WAGE_PER_HOUR;
  }

  calculateWage(attendace: number): number {
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

  calculateMonthlyWage(restricted?: number): number {
    let current_day: number = 0;
    let current_employee_wage: number = 0;
    let employee_monthly_wage: number = 0;
    let total_hours: number = 0;
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
}

{
  //  uc7 -   Create employee class
  let employee_object = new Employee();
  console.log(employee_object.printUC("uc7"));
  console.log("Employee class created");
}
