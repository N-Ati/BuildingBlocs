var popupLink = document.getElementById("popupLink");
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closeBtn");

    // Function to validate the input for sign up form for volunteering users
        function validateForm() {




            
        }


        function getInfo(){
            var popupLink = document.getElementById("popupLink");
            var popup = document.getElementById("popup");
            var popupOverlay = document.getElementById("popupOverlay");
            var closeBtn = document.getElementById("closeBtn");
        }




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