const PART_TIME_WAGE: number = 4
const FULL_TIME_WAGE: number = 8
const WAGE_PER_HOUR: number = 20

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
    switch(attendace){
      case 0:
        return "Part time employee"
        break
      case 1:
        return "Full time employee"
        break
      case 2:
        return "Absent employee"
        break
      default:
        return "In default case"
    }
  }
  
  function returnFullTimeWage(): number {return FULL_TIME_WAGE*WAGE_PER_HOUR}

  function returnPartTimeWage(): number {return PART_TIME_WAGE*WAGE_PER_HOUR}

  function calculateWage(attendace: number): number {
    switch(attendace){
      case 0:
        return (returnPartTimeWage())
        break
      case 1:
        return (returnFullTimeWage())
        break
      case 2:
        return 0
        break
      default:
        return 0
    }
  }

  {
    //  uc1 -   Print welcome message & Check employee attendance
    console.log(printUC("uc1"))
    console.log(greet())
    console.log("Checking attendance: " +checkAttendance(attendanceGenerator()))

    //  uc2 -   Calculate full time wage
    console.log(printUC("uc2"))
    console.log("Full time wage: " +returnFullTimeWage())

    //  uc3 -   Calculate part time wage
    console.log(printUC("uc3"))
    console.log("Part time wage: " +returnPartTimeWage())

    //  uc4 -   Calculating employee wage using switch
    console.log(printUC("uc4"))
    console.log("Employee wage: " +calculateWage(attendanceGenerator()))
  }
  