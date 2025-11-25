document.addEventListener("DOMContentLoaded", function () {

    const horas = [
        "00h","01h","02h","03h","04h","05h","06h",
        "07h","08h","09h","10h","11h","12h",
        "13h","14h","15h","16h","17h","18h",
        "19h","20h","21h","22h","23h"
    ];

    const leituras = [
        10, 5, 8, 6, 4, 7, 15,
        45, 80, 120, 160, 200, 180,
        220, 240, 260, 230, 210, 190,
        150, 120, 80, 50, 20
    ];

    const naoLidas = [
        2, 1, 1, 0, 0, 1, 3,
        5, 8, 10, 12, 15, 14,
        18, 20, 22, 19, 16, 14,
        10, 8, 6, 3, 1
    ];

    const ctx = document.getElementById("graficoPicoHora");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: horas,
            datasets: [
                {
                    label: "Leituras por Hora",
                    data: leituras,
                    borderColor: "#00AFAA",
                    backgroundColor: "rgba(0, 175, 170, 0.3)",
                    borderWidth: 3,
                    pointRadius: 5,
                    pointBackgroundColor: "#00AFAA",
                    tension: 0.4
                },
                {
                    label: "Não Lidas",
                    data: naoLidas,
                    borderColor: "#ff3b3b",
                    backgroundColor: "rgba(255, 59, 59, 0.25)",
                    borderWidth: 3,
                    pointRadius: 5,
                    pointBackgroundColor: "#ff3b3b",
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,  // 🔥 deixa o gráfico nítido
            plugins: {
                legend: {
                    display: false          // 🔥 remove legendas
                }
            },
            scales: {
                x: {
                    ticks: { color: "#ccc" },
                    grid: { color: "#333" }
                },
                y: {
                    ticks: { color: "#ccc" },
                    grid: { color: "#333" }
                }
            }
        }
    });

});
