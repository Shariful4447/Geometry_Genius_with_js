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