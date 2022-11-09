
    const year = prompt('Enter a year:');

     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            document.writeln(year + ' is a leap year');
        } else {
            document.writeln(year + ' is not a leap year');
        }




