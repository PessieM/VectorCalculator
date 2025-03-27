/* script.js
 * javascript for vector calculations
 * Pessie Mittelman
 * 3/26/25 */

//variables
let v = [0, 0]
let w = [0, 0]

//function to calculate the magnitude of a vector
function findMagnitude(v){
    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2)).toFixed(2);
}

//function to calculate the unit vector
function findUnitVector(v){
    let magnitude = findMagnitude(v);
    let unitVector = [(v[0]/magnitude).toFixed(2), (v[1]/magnitude).toFixed(2)];
    return "[" + unitVector.join(", ") + "]";
}

//function to calculate the sum of two vectors
function findSum(v, w){
    let sum = [v[0] + w[0], v[1] + w[1]];
    return "[" + sum.join(", ") + "]";
}

//function to calculate the difference of two vectors
function findDifference(v, w){
    let difference = [v[0] - w[0], v[1] - w[1]];
    return "[" + difference.join(", ") + "]";
}

//function to calculate the dot product of two vectors
function findDotProduct(v, w){
    let dotProduct = (v[0] * w[0]) + (v[1] * w[1]);
    return dotProduct;
}

document.getElementById("vectorVForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    v[0] = parseFloat(document.getElementById("v0").value);
    v[1] = parseFloat(document.getElementById("v1").value);
});

document.getElementById("vectorWForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    w[0] = parseFloat(document.getElementById("w0").value);
    w[1] = parseFloat(document.getElementById("w1").value);
});


document.getElementById("magnitudeV").addEventListener("click", function() {
    document.getElementById("showMagnitudeV").innerHTML = findMagnitude(v);
});

document.getElementById("magnitudeW").addEventListener("click", function() {
    document.getElementById("showMagnitudeW").innerHTML = findMagnitude(w);
});

document.getElementById("unitVectorV").addEventListener("click", function() {
    document.getElementById("showUnitVectorV").innerHTML = findUnitVector(v);
});

document.getElementById("unitVectorW").addEventListener("click", function() {
    document.getElementById("showUnitVectorW").innerHTML = findUnitVector(w);
});

document.getElementById("add").addEventListener("click", function() {
    document.getElementById("sum").innerHTML = findSum(v, w);
});

document.getElementById("subtractV-W").addEventListener("click", function() {
    document.getElementById("differenceV-W").innerHTML = findDifference(v, w);
});

document.getElementById("subtractW-V").addEventListener("click", function() {
    document.getElementById("differenceW-V").innerHTML = findDifference(w, v);
});

document.getElementById("dotProduct").addEventListener("click", function() {
    document.getElementById("showDotProduct").innerHTML = findDotProduct(v, w);
});