document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const dataTable = document.getElementById('dataTable');
    const submitButton = document.getElementById('submitButton');

    // Event listener untuk submit form
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addData();
    });

    // Menghapus event listener untuk tombol submit karena sudah ada di form

    // Event listener untuk input fields
    const inputs = form.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateForm();
        });
    });

    function addData() {
        const nama = document.getElementById('Nama').value;
        const nim = document.getElementById('NIM').value;
        const kelas = document.getElementById('Kelas').value;
        const alamat = document.getElementById('Alamat').value;

        if (nama && nim && kelas && alamat) {
            const newRow = dataTable.insertRow(-1);
            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = nim;
            newRow.insertCell(2).textContent = kelas;
            newRow.insertCell(3).textContent = alamat;

            // Reset form
            form.reset();
            validateForm();
        }
    }

    function validateForm() {
        const isValid = Array.from(inputs).every(input => input.value.trim() !== '');
        submitButton.disabled = !isValid;
    }

    // Memanggil validateForm saat halaman dimuat
    validateForm();
});
