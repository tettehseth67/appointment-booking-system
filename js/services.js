const deleteButtons = document.querySelectorAll(".admin-table .table-action-danger");
const modal = document.querySelector(".confirmation-modal");

const cancelButton = modal.querySelector(".secondary-button");
const overlay = modal.querySelector(".confirmation-modal-overlay");

deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    });
});

cancelButton.addEventListener("click", function () {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
});

overlay.addEventListener("click", function () {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
});
