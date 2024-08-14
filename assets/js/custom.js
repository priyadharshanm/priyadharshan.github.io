$(document).ready(function() {
    $('.scrolly').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Select all images inside the projects section
    var projectImages = document.querySelectorAll('#projects img');

    projectImages.forEach(function(img) {
        img.addEventListener('click', function(event) {
            event.preventDefault();
            // Display the modal
            modal.style.display = "flex";
            // Set the source of the modal image to the clicked image's source
            modalImg.src = this.src;
            // Set the caption text to the clicked image's alt text
            if (!this.src) {
            captionText.innerHTML = this.alt || '';  // Default to empty string if no alt text
            }
        });
    });

    // Close the modal when the user clicks on the close button
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Close the modal when the user presses the Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });
});
