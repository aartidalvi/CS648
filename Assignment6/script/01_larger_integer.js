var int1 = parseInt(window.prompt("Enter first interger"));
var int2 = parseInt(window.prompt("Enter second interger"));

if (int1 === int2) {
    document.write(int1 + "and " + int2 + "are equal");
} else if (int1 > int2) {
    document.write(int1 + " is the larger integer");
} else {
    document.write(int2 + " is the larger integer");
}
