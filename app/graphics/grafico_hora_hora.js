const ctx = document.getElementById('chartHoras');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            "00h", "01h", "02h", "03h", "04h", "05h",
            "06h", "07h", "08h", "09h", "10h", "11h",
            "12h", "13h", "14h", "15h", "16h", "17h",
            "18h", "19h", "20h", "21h", "22h", "23h"
        ],

        datasets: [{
            label: "Leituras por Hora",
            data: [120, 80, 60, 40, 30, 20, 50, 140, 220, 260, 300, 350, 380, 410, 440, 500, 480, 520, 600, 570, 490, 380, 240, 150], 
            borderWidth: 3,
            borderColor: "#00AFAA",
            backgroundColor: "rgba(0, 175, 170, 0.25)",
            fill: true,
            tension: 0.3, // suavidade da linha
            pointRadius: 3,
            pointBackgroundColor: "#00AFAA"
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                labels: { color: "#00AFAA" }
            }
        },
        
        scales: {
            x: {
                ticks: { color: "#00AFAA" },
                grid: { color: "rgba(0, 175, 170, 0.1)" }
            },
            y: {
                ticks: { color: "#00AFAA" },
                grid: { color: "rgba(0, 175, 170, 0.1)" }
            }
        }
    }
});
