const popupLink = document.getElementById("popupLink");
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closeBtn");

        // Function to open the popup
        popupLink.addEventListener("click", function() {
            popupOverlay.style.display = "block";
            popup.style.display = "block";
        });


        // Function to close the popup
        closeBtn.addEventListener("click", function() {
            popupOverlay.style.display = "none";
            popup.style.display = "none";
        });

        // Close the popup when clicking outside the popup (on overlay)
        popupOverlay.addEventListener("click", function() {
            popupOverlay.style.display = "none";
            popup.style.display = "none";
        });