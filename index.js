// Write your solution in this file!
let employee = {
    name: "Elijah Nyasiando",
    streetAddress: "Nairobi, Kenya",
};
  
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object directly
    employee[key] = value;
    return employee; 
}

function deleteFromEmployeeByKey(employee, key) {
    // Create a new object without the specified key using the spread operator
    const newEmployee = { ...employee };
    delete newEmployee[key]; // Delete the key from the new object
    return newEmployee; // Return the new object without the deleted key
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key from the employee object directly
    delete employee[key];
    return employee; // Return the updated employee
}

  