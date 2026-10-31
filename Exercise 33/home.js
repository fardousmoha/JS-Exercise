function changeContent() {

    // Change heading text
    document.getElementById("heading").innerText =
        "JavaScript DOM Manipulation";

    // Change paragraph text
    document.getElementById("paragraph").innerText =
        "The paragraph content has been changed!";

    // Change HTML content
    document.getElementById("content").innerHTML =
        "<h2>Hello Students!</h2><p>This HTML content was updated using JavaScript.</p>";

}