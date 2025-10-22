/*Array.prototype.join()-Объединяет элементы массива в строку
с указанным разделителем.*/
let arr=["Fire", "Air", "Water"];
console.log(arr.join()); // "Fire,Air,Water"
console.log(arr.join("")); // "FireAirWater"
console.log(arr.join("-")); // "Fire-Air-Water"