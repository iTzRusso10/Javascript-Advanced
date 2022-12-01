function calculateSalary(role){
 switch (role){
    case "ceo":
        salary = "The CEO salary is : 2200€"
        break;
    case "cto":
        salary = "The CTO salary is : 1800€"
        break;
    case "manager":
        salary = "The Manager salary is: 1800€"
        break;
    case "developer":
        salary = "The Developer salary is : 1500€"
        break;
    case "other":
        salary = "The default salary is : 1000€"
        break;
 }
 return salary;
}


const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);

