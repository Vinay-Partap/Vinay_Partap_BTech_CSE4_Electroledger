document.addEventListener("DOMContentLoaded", function () {
    const accountMenu = document.querySelector(".account-menu");
    const dropdown = document.getElementById("dropdown-menu");

    accountMenu.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event from bubbling up
        dropdown.classList.toggle("show"); // Toggle visibility
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!accountMenu.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
