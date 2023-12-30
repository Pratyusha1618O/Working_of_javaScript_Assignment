// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.
{
    console.log(x); //undefined
    console.log(y); //reference error
    console.log(z); //reference error

    var x = "PW";
    let y = "Skills";
    const z = "!";

    console.log(x); //PW
    console.log(y); //Skills
    console.log(z); //"!"
}