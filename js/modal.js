// Get the modal
var modal = document.getElementById("myModal");



// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("modImages");
var modalImg = document.getElementById("img01");



// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
