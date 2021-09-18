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
  returnWageArray(): void;
  wageUsingForLoop(): number;
  wageUsingForEach(): number;
  displayDailyWage(): void;
  displayFullTimeWage(): void;
  displayFirstFullTimePay(): void;
  checkFullTimeWage(): void;
  checkPartTimeWage(): void;
  totalDays(): void;
  storeInMap(): void;
}

class Employee implements EmployeeInterface {
  readonly PART_TIME_WAGE = 4;
  readonly FULL_TIME_WAGE = 8;
  readonly WAGE_PER_HOUR = 20;
  readonly DAYS_IN_MONTH = 20;

  private employee_wage_array: number[] = [];
  private employee_wage_map = new Map();
  constructor() {
    this.returnWageArray();
  }

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

  returnWageArray(): void {
    let i: number;
    for (i = 0; i < this.DAYS_IN_MONTH; i++) {
      this.employee_wage_array.push(
        this.calculateWage(this.attendanceGenerator())
      );
    }
  }

  wageUsingForLoop(): number {
    let total_wage: number = 0;
    let i: number;
    for (i = 0; i < this.employee_wage_array.length; i++) {
      total_wage += this.employee_wage_array[i];
    }
    return total_wage;
  }

  wageUsingForEach(): number {
    let total_wage: number = 0;
    this.employee_wage_array.forEach((wages) => {
      total_wage += wages;
    });
    return total_wage;
  }

  displayDailyWage(): void {
    console.log("Day \t|\t Wage");
    console.log("----------------------");
    this.employee_wage_array.map((wages: number, index: number) =>
      console.log(index + 1 + " \t|\t " + wages)
    );
  }

  displayFullTimeWage(): void {
    console.log("Day \t|\t Wage");
    console.log("----------------------");
    this.employee_wage_array.filter((wages: number, index: number) => {
      if (wages == 160) {
        console.log(index + 1 + " \t|\t " + wages);
      }
    });
  }

  displayFirstFullTimePay(): void {
    let isFirst: boolean = true;
    this.employee_wage_array.find((wages: number, index: number) => {
      if (wages == 160 && isFirst) {
        console.log(
          "The first occurance when Full Time Wage was earned is = " +
            (index + 1)
        );
        isFirst = false;
      }
    });
  }

  checkFullTimeWage(): void {
    let isValid: boolean = true;
    for (let i = 0; i < this.employee_wage_array.length; i++) {
      if (
        this.employee_wage_array[i] != 160 &&
        this.employee_wage_array[i] != 80 &&
        this.employee_wage_array[i] != 0
      ) {
        isValid = false;
        break;
      }
    }
    console.log(
      "Every Element of Full Time Wage is truly holding Full time wage = " +
        isValid
    );
  }

  checkPartTimeWage(): void {
    let isPartTime: boolean = false;
    this.employee_wage_array.find((wages, index) => {
      if (wages == 80 && !isPartTime) {
        isPartTime = true;
      }
    });
    if (isPartTime) {
      console.log("Part Time Wage present: " + isPartTime);
    } else {
      console.log("No Part Time Wage");
    }
  }

  totalDays(): void {
    let days_worked = 0;
    this.employee_wage_array.forEach((wages) => {
      days_worked += wages == 160 ? 1 : wages == 80 ? 0.5 : 0;
    });
    console.log("Total number of days worked = " + days_worked);
  }

  storeInMap(): void {
    let total_wage: number = 0;
    this.employee_wage_array.forEach((wages: number, index: number) => {
      total_wage += wages;
      this.employee_wage_map.set("Day: " + ++index, [wages, total_wage]);
    });
    console.log("Employee wage map");
    console.log(this.employee_wage_map);
  }
}

{
  //  uc7 -   Create employee class
  let employee_object = new Employee();
  console.log(employee_object.printUC("uc7"));
  console.log("Employee class created");

  //  uc8 -   Calculate total wage using array
  console.log(employee_object.printUC("uc8"));
  console.log(
    "Employee wage using array: " + employee_object.wageUsingForLoop()
  );

  //  uc9 - Task_1  Calculate total Wage using array forEach
  console.log(employee_object.printUC("uc9 - Task_1"));
  console.log(
    "Employee wage using forEach: " + employee_object.wageUsingForEach()
  );

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

  //  uc10 - Store the Day and the Daily Wage along with the Total wage using map
  console.log(employee_object.printUC("uc10"));
  employee_object.storeInMap();
}
