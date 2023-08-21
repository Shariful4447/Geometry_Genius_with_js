function calculateTriangleArea(){
    // get triangle base
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    // calculate area of triangle
    const triangleArea =0.5 * base *height;
    console.log(triangleArea);

    // Show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = triangleArea;
}

function calculateRectangleArea(){

    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get triangle height
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // Validate Input
    if (isNaN(width) || isNaN(length)) {
        alert('please insert a Number');
        return;
    }
    // calculate area of triangle
    const rectangleArea = width * length;
    console.log(rectangleArea);

    // Show triangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = rectangleArea;
}

// for Parrallelogram Area use reusable code method 

function calculateParrallelogramArea(){
    const base = getInputValue('parallel-base');
    console.log(base);
    const height =getInputValue('parallel-height');
    console.log(height);

    // Calculate area and set
    const area = base * height;
    console.log(area);
    setElementInnerText('parallelogram-area', area);
    // Add to calculation Entry Area
    addtoCalculationEntry('Parrallelogram', area);
}
// Reusable input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set for area span,p, div 
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}

// Add to calculation EntryPoint
// find the element whwere you want to dynamic html
// create an element want to add
// set inner html to element
// append the child to the parent element
function addtoCalculationEntry(areaType, area){
    console.log(areaType+ ' ' +area);

    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count +1}. ${areaType} ${area}`
    calculationEntry.appendChild(p);
}