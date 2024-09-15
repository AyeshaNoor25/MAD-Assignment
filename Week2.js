// create an array of objects inside a function
function Array(){
    var students =[
        {Name:'ayesha', Sap:41379, Gender:'Female'},
        {Name:'Ushna', Sap:40819, Gender:'Female'},
        {Name:'Javeria', Sap:39977, Gender:'Female'},
        {Name:'Fatima', Sap:40089, Gender:'Female'}
    ];
    console.log(students);
}
Array();

// Export the function using common js module
function myFunction() {
    console.log("Hello from myFunction!");
}
// Export the function
module.exports = myFunction;

myFunction();
