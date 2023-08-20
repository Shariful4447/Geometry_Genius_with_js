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

    // calculate area of triangle
    const rectangleArea = width * length;
    console.log(rectangleArea);

    // Show triangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = rectangleArea;
}