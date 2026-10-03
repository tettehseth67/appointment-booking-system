function openDeleteModal(clientName, clientId) {
    document.getElementById('deleteClientName').textContent = clientName;
    document.getElementById('deleteClientId').textContent = clientId;
    document.getElementById('deleteClientDialog').classList.add('show');
}

function closeDeleteModal() {
    document.getElementById('deleteClientDialog').classList.remove('show');
}

window.addEventListener("click", function (event) {
    const modal = document.getElementById("deleteClientDialog");

    if (event.target === modal) {
        closeDeleteModal();
    }
});