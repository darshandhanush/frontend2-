
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    // Using map function
    const developers = arr.filter(employee => employee.profession === "developer");
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    // Using forEach function
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    // Adding a new employee
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    // Removing employees with profession "admin"
    const filteredArray = arr.filter(employee => employee.profession !== "admin");
    console.log(filteredArray);
  }
  
  function concatenateArray() {
    // Creating another array
    const newArray = [
      { id: 5, name: "emma", age: "22", profession: "developer" },
      { id: 6, name: "david", age: "25", profession: "manager" },
      { id: 7, name: "lisa", age: "23", profession: "developer" }
    ];
  
    // Concatenating arrays
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }




  console.log("PrintDeveloperbyMap():");
PrintDeveloperbyMap();

console.log("\nPrintDeveloperbyForEach():");
PrintDeveloperbyForEach();

console.log("\naddData():");
addData();

console.log("\nremoveAdmin():");
removeAdmin();

console.log("\nconcatenateArray():");
concatenateArray();
