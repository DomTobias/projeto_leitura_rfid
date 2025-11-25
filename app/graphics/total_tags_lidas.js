document.addEventListener("DOMContentLoaded", function () {

    const totalLidas = 19487;
    const totalNaoLidas = 2898;

    const total = totalLidas + totalNaoLidas;
    const porcentagem = ((totalLidas / total) * 100).toFixed(1);

    const centerTextPlugin = {
        id: 'centerText',
        afterDraw(chart) {
            const { ctx, chartArea: { width, height } } = chart;

            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.font = 'bold 60px Open Sans';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${porcentagem}%`, width / 2, height / 2 - 10);

            ctx.font = '35px Open Sans';
            ctx.fillStyle = '#ffffff';
            ctx.fillText('TAGS LIDAS', width / 2, height / 2 + 40);

            ctx.restore();
        }
    };

    const ctx = document.getElementById("graficoLidas");

    new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [{
                data: [totalLidas, totalNaoLidas],
                backgroundColor: [
                    "#00AFAA",
                    "#1e1e1e"
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutout: "70%",
            plugins: {
                legend: {
                    display: true,
                    labels: { color: "#fff" }
                }
            }
        },
        plugins: [centerTextPlugin] // 🔥 AQUI: plugin só para este gráfico
    });

});
