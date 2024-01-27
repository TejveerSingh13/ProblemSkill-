function Developer(name) {
  this.name = name;
  this.type = "Developer";
}
function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
      default:
        break;
    }
  };
}
const EF = new EmployeeFactory();
const employees = [];

function say() {
  console.log(`Hi my name is ${this.name} and I am a ${this.type}`);
}

employees.push(EF.create("Tejveer", 1));
employees.push(EF.create("Patrick", 2));
employees.push(EF.create("Tim", 2));
employees.push(EF.create("John", 1));

employees.forEach((emp) => say.call(emp));
