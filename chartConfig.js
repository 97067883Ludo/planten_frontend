export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'sdf', 'much'],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40, 70, 1100],
            tension: 0.4,
        }
    ]
}

export const options = {
    maintainAspectRatio: false,
    responsive: true,
    pointHoverRadius: 5,
    title: {
        display: true,
        text: 'Chart.js Floating Bar Chart'
    }
}
