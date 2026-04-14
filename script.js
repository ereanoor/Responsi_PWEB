document.getElementById('personaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const hobi = document.getElementById('hobi').value.trim().toLowerCase();
    const angka = parseInt(document.getElementById('angka').value);

    const daftarPersona = [
        "The Tech Innovator",
        "The Creative Soul",
        "The Logic Mastermind",
        "The Digital Architect",
        "The Cyberspace Explorer",
        "The AI Whisperer",
        "The Esports Gladiator",
        "The Code Alchemist"
    ];

    const perhitunganUnik = nama.length + hobi.length + angka;
    
    const indexPersona = perhitunganUnik % daftarPersona.length;
    const personaTerpilih = daftarPersona[indexPersona];

    const divHasil = document.getElementById('hasilPersona');
    divHasil.innerHTML = `
        <p>Halo, <strong>${nama}</strong>!</p>
        <p>Identitas digitalmu adalah:</p>
        <div class="persona-title">"${personaTerpilih}"</div>
    `;
    
    divHasil.classList.remove('hidden');
});