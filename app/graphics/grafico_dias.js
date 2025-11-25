document.addEventListener("DOMContentLoaded", function () {

    // Últimos 7 dias (exemplo — substitua pelos seus)
    const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

    const lidas =      [320, 280, 410, 390, 450, 300, 350];
    const naoLidas =   [40,  30,  55,  48,  60,  35,  28];

    const ctx = document.getElementById("grafico7dias");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: dias,
            datasets: [
                {
                    label: "Lidas",
                    data: lidas,
                    backgroundColor: "#00AFAA",
                    borderRadius: 8
                },
                {
                    label: "Não Lidas",
                    data: naoLidas,
                    backgroundColor: "#ff3b3b",
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#fff",
                        font: { size: 14 }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: "#ccc" },
                    grid: { display: false }
                },
                y: {
                    ticks: { color: "#ccc" },
                    grid: { color: "#333" },
                    beginAtZero: true
                }
            }
        }
    });

});