function changeStyle() {
    // Get the element to change its style
    var element = document.getElementById("welcome");

    // Toggle the "style-changed" class on the element
    element.classList.toggle("style-changed");

    // Add console log to check if the function is running
    console.log("Style changed!");
}