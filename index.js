const configChartBar = {
    type: 'bar',
    data: {
        labels: ['Palio', 'Uno', 'Gol', 'Corsa', 'Kwid', 'Onix'],
        datasets: [{
            data: [10, 35, 24, 11, 12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}

const configChartLine = {
    type: 'line',
    data: {
        labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        datasets: [
            {
                data: [1123, 1109, 1008, 1208, 1423, 1114, 1036],
                label: 'Casos Confirmados',
                borderColor: 'rgb(60,186,159)'
            },
            {
                data: [143, 109, 208, 210, 113, 114, 203],
                label: 'Casos de Óbitos',
                borderColor: 'rgb(255,140,13)'
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'left'
            },
            title: {
                display: true,
                text: 'Curva de Covid-19'
            },
            layout: {
                padding: {
                    left: 200,
                    right: 100,
                    top: 10,
                    bottom: 10
                }
            }
        }
    }
}

const configChartPizza = {
    type: 'pie',
    data: {
        labels: ['Iphone', 'Samsung', 'Motorola', 'Outros'],
        datasets: [
            {
                data: [38, 45, 13, 4],
                backgroundColor: ['#c4c4c4', '#31ef4d', '#acdeff', '#ffaaff']
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Distribuição de Venda de Celulares - 1º Trimestre 2021'
            }
        }
    }
}

let chartBar = document.getElementById('chartBar');
let chartLine = document.getElementById('chartLine');
let chartPizza = document.getElementById('chartPizza');

let oChartBar = new Chart(chartBar, configChartBar);
let oChartLine = new Chart(chartLine, configChartLine);
let oChartPizza = new Chart(chartPizza, configChartPizza);