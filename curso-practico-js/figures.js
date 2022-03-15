// SQUARE
const perimeterSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function perimeterCalculate() {
    const input = document.getElementById("square-input");
    const value = parseFloat(input.value);
    const perimeter = perimeterSquare(value);
    alert(perimeter.toFixed(2) + "cm");
}

function areaCalculate() {
    const input = document.getElementById("square-input");
    const value = parseFloat(input.value);
    const area = areaSquare(value);
    alert(area.toFixed(2) + "cm2");
}

// TRIANGLE
const perimeterTriangle = (side1, side2, base) => side1 + side2 + base;
const areaTriangle = (base, height) => (base * height) / 2;

function perimeterCalculateTriangle() {
    const inputSide1 = document.getElementById("triangle-side1");
    const inputSide2 = document.getElementById("triangle-side2");
    const inputBase = document.getElementById("triangle-base");
    const valueSide1 = parseFloat(inputSide1.value);
    const valueSide2 = parseFloat(inputSide2.value);
    const valueBase = parseFloat(inputBase.value);

    const perimeter = perimeterTriangle(valueSide1, valueSide2, valueBase);
    alert(perimeter.toFixed(2) + "cm");
}

function areaCalculateTriangle() {
    const inputSide1 = document.getElementById("triangle-side1");
    const inputSide2 = document.getElementById("triangle-side2");
    const inputBase = document.getElementById("triangle-base");
    const inputHeight = document.getElementById("triangle-height");
    const valueHeight = parseFloat(inputHeight.value);
    const valueBase = parseFloat(inputBase.value);
    const perimeter = areaTriangle(valueBase, valueHeight);
    alert(perimeter.toFixed(2) + "cm2");
}

// CIRCLE
const circleDiameter = (radio) => radio * 2;
const circumCircle = (radio) => circleDiameter(radio) * Math.PI;
const circleArea = (radio) => radio * radio * Math.PI;

function diameterCalculateCircle() {
    const input = document.getElementById("circle-input");
    const value = parseFloat(input.value);

    const diameter = circleDiameter(value);
    alert(diameter.toFixed(2) + "cm");
}

function areaCalculateCircle() {
    const input = document.getElementById("circle-input");
    const value = parseFloat(input.value);

    const area = circleArea(value);
    alert(area.toFixed(2) + "cm2");
}

function circumCalculateCircle() {
    const input = document.getElementById("circle-input");
    const value = parseFloat(input.value);

    const circum = circumCircle(value);
    alert(circum.toFixed(2) + "cm");
}

// ISOSCELES TRIANGLE
const heightIsosceles = (sides, base) => Math.sqrt(sides ** 2 - base ** 2 / 4);

function heightIsoTriangle() {
    const inputSides = document.getElementById("iso-sides");
    const inputBase = document.getElementById("iso-base");

    const valueSides = parseFloat(inputSides.value);
    const valueBase = parseFloat(inputBase.value);

    const height = heightIsosceles(valueSides, valueBase);
    alert(height.toFixed(2) + "cm");
}