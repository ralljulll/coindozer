// Criar o gráfico horizontal
var chartContainer = $('<canvas id="chart"></canvas>');
resultsContainer.append(chartContainer);

var chartData = {
    labels: [],
    datasets: [{
        label: 'Total de pagamento',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

Object.keys(data).forEach(function(machineId) {
    var result = data[machineId];
    var totalPagamento = result.totalPagamento !== undefined ? (result.totalPagamento / 1000000000) : '';

    chartData.labels.push('Máquina ' + machineId);
    chartData.datasets[0].data.push(totalPagamento);
});

var chartOptions = {
    scales: {
        x: {
            beginAtZero: true
        },
        y: {
            beginAtZero: true,
            minBarLength: 0
        }
    }
};

new Chart(chartContainer[0], {
    type: 'horizontalBar',
    data: chartData,
    options: chartOptions
});
