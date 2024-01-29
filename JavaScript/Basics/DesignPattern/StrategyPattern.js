/**
 * The Strategy Pattern is a behavioral design pattern that defines a family of interchangeable algorithms, 
 * encapsulates each one of them, and makes them interchangeable. It allows a client to choose an appropriate algorithm 
 * from a family of algorithms at runtime. This pattern promotes open/closed principle, where you can add new algorithms 
 * without altering the existing code that uses those algorithms.

Key components of the Strategy Pattern:
- Context: The context class maintains a reference to the strategy object and may switch between different strategies at runtime.

- Strategy: The strategy is an interface or abstract class that defines a set of methods that concrete strategy classes must implem- ent. These methods represent the different algorithms.

- Concrete Strategies: These are the concrete implementations of the strategy interface. Each concrete strategy provides a specific implementation of an algorithm.
 */

function Fedex() {
  this.calculate = (package) => {
    return 2.45;
  };
}
function UPS() {
  this.calculate = (package) => {
    return 1.56;
  };
}
function USPS() {
  this.calculate = (package) => {
    return 1.45;
  };
}
//Creating a strategy
function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const package = {
  to: "India",
  fomr: "USA",
  weight: "15kg",
};

let shipment = new Shipping();
shipment.setStrategy(fedex);
console.log("fedex :", shipment.calculate(package));

shipment.setStrategy(ups);
console.log("ups :", shipment.calculate(package));

shipment.setStrategy(usps);
console.log("usps :", shipment.calculate(package));

// Since all three fedex, ups, usps objects have the same method name "calculate" but different strategy so we can
// encapsulate that behaviour in the shippping context
