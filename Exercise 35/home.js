function changeImage() {
    const image = document.querySelector("#myImage");

    const urls = prompt("enter the image URLs ");
    const border = prompt("enter the border color ");
    const width = prompt("enter the width in px ");
    const height = prompt("enter the height in px ");
    const borderRadius = prompt("enter the border radius in px ");

   image.setAttribute("src", urls);


   image.style.border =border + " solid 5px";
   image.style.width = width + "px";
    image.style.height = height + "px";
    image.style.borderRadius = borderRadius + "px";

}