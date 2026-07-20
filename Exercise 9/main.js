let car ={
    year: 2020,
    make: "Toyota",
    model: "Camry",
    engine: "2.5L I4",
    transmission: "8-speed automatic",
     start: function() {
        console.log("The car has started");
    }
    
}
console.log(car.year);
console.log(car.make);
console.log(car.model);
console.log(car.engine);
console.log(car.transmission);
car.start();