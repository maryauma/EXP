const express = require('express');
const app = express();
const port = 4000;

let cars = [
    { name: "BMW", model: "M5", price: 120000 },
    { name: "Mercedes", model: "C63", price: 95000 },
    { name: "Audi", model: "RS7", price: 110000 },
    { name: "Toyota", model: "Supra", price: 65000 },
    { name: "Tesla", model: "Model S", price: 90000 },
    { name: "Porsche", model: "911 Turbo", price: 180000 },
    { name: "Nissan", model: "GTR", price: 115000 },
    { name: "Lamborghini", model: "Huracan", price: 250000 },
    { name: "Ferrari", model: "488", price: 300000 },
    { name: "Ford", model: "Mustang", price: 55000 },
    { name: "Chevrolet", model: "Camaro", price: 52000 },
    { name: "Mazda", model: "RX-7", price: 45000 },
    { name: "Subaru", model: "WRX STI", price: 48000 },
    { name: "Dodge", model: "Charger", price: 60000 },
    { name: "Honda", model: "Civic Type R", price: 45000 }
  ];


app.get('/', (req, res) => {res.send('Hello World!');});

app.get("/car/:name", (req, res) => {
  let result = cars.filter((c)=> c.name.toLowerCase() == req.params.name.toLowerCase());
  res.json(result);
});

app.get('/cars/:price/:maxprice', (req, res) => {
    let result = cars.filter((el) => el.price >= req.params.price && el.price <= req.params.maxprice);
    res.json(result);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(`you can see the car details at http://localhost:${port}/car/BMW`);
  console.log(`you can see the car details at http://localhost:${port}/cars/50000/100000`);
});
