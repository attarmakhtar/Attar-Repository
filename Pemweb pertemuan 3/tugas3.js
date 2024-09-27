// Data untuk header tabel dan isi tabel
const tableHeaders = ['No.', 'Nama Lengkap', 'NIM', 'Program Studi', 'Selengkapnya'];
const tableRows = [
    ['M. Ottmar', '19', '2306110', 'SIK', 'Klik Disini'],
    ['M. Bintang', '20', '2308210', 'SIK', 'Klik Disini'],
    ['Fadli K.', '19', '2301260', 'SIK', 'Klik Disini'],
    ['Tegar D.', '19', '2308506', 'SIK', 'Klik Disini'],
    ['FAiq M.', '19', '2301853', 'SIK', 'Klik Disini']
];

// Fungsi untuk membuat header tabel dengan event click untuk setiap kolom
function createTableHeader(headers) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    headers.forEach((header, index) => {
        const th = document.createElement('th');
        th.textContent = header;
        th.addEventListener('click', () => handleHeaderClick(index)); // Menambahkan event listener
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    return thead;
}

// Fungsi untuk membuat isi tabel
function createTableBody(rows) {
    const tbody = document.createElement('tbody');

    rows.forEach((row, rowIndex) => {
        
        const tr = document.createElement('tr');
        // Menambahkan event listener untuk mouseover dan mouseout pada setiap baris
        tr.addEventListener('mouseover', () => {
            tr.style.backgroundColor = '#D3F9F1'; // Warna hijau muda saat mouse berada di atas row
        });

        tr.addEventListener('mouseout', () => {
            tr.style.backgroundColor = ''; // Mengembalikan ke warna default saat mouse keluar dari row
        });

        row.forEach((cell, cellIndex) => {
            const td = document.createElement('td');

            // Jika index adalah 4 (kolom 'Selengkapnya'), ubah menjadi hyperlink
            if (cellIndex === 4 && cell === 'Klik Disini') {
                const link = document.createElement('a');
                link.href = '#'; // Ganti '#' dengan URL yang diinginkan atau tetap '#' untuk event handler
                link.textContent = cell;

                // Menambahkan event listener yang berbeda untuk setiap baris
                link.addEventListener('click', (event) => {
                    event.preventDefault(); // Mencegah tindakan default dari hyperlink
                    handleLinkClick(rowIndex, link, tr); // Panggil fungsi yang sesuai dengan index baris dan passing link element dan row element
                });

                // Event mouseover
                link.addEventListener('mouseover', () => handleMouseOver(rowIndex));

                // Event mouseout
                link.addEventListener('mouseout', () => handleMouseOut(rowIndex));

                // Event double-click
                link.addEventListener('dblclick', () => handleDoubleClick(rowIndex));

                // Event contextmenu (klik kanan)
                link.addEventListener('contextmenu', (event) => {
                    event.preventDefault(); // Mencegah menu konteks default
                    handleContextMenu(rowIndex);
                });

                td.appendChild(link);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    return tbody;
}

// Fungsi yang akan dipanggil saat hyperlink "Klik Disini" diklik
function handleLinkClick(rowIndex, linkElement, rowElement) {
    switch(rowIndex) {
        case 0:
            alert('Anda mengklik link di baris 1: M. Ottmar');
            break;
        case 1:
            alert('Anda mengklik link di baris 2: M. Bintang');
            break;
        case 2:
            alert('Anda mengklik link di baris 3: Fadli K.');
            break;
        case 3:
            alert('Anda mengklik link di baris 4: Tegar D.');
            break;
        case 4:
            alert('Anda mengklik link di baris 5: FAiq M.');
            break;
        default:
            console.log('Unknown row');
    }
    
    // Mengubah teks menjadi "Sudah Diklik"
    linkElement.textContent = 'Sudah Diklik';
    // Mengubah warna teks menjadi hitam
    linkElement.style.color = 'black';
    // Mengubah background row menjadi hijau tosca
    rowElement.style.backgroundColor = '#40E0D0'; // Warna hijau tosca
}

// Fungsi untuk menangani mouseover yang berbeda untuk setiap baris
function handleMouseOver(rowIndex) {
    console.log(`Mouse over di baris ${rowIndex + 1}`);
}

// Fungsi untuk menangani mouseout yang berbeda untuk setiap baris
function handleMouseOut(rowIndex) {
    console.log(`Mouse out dari baris ${rowIndex + 1}`);
}

// Fungsi untuk menangani double-click yang berbeda untuk setiap baris
function handleDoubleClick(rowIndex) {
    alert(`Double-click di baris ${rowIndex + 1}`);
}

// Fungsi untuk menangani klik kanan (context menu) yang berbeda untuk setiap baris
function handleContextMenu(rowIndex) {
    alert(`Anda mengklik kanan di baris ${rowIndex + 1}`);
}

// Fungsi untuk menampilkan tabel di dalam elemen dengan ID "tugas3"
function renderTable() {
    const table = document.getElementById('tugas3');
    table.appendChild(createTableHeader(tableHeaders));
    table.appendChild(createTableBody(tableRows));
}

// Memanggil fungsi renderTable saat halaman dimuat
window.onload = renderTable;
