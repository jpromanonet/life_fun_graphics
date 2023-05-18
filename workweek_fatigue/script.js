document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById("graph").getContext("2d");
    
    var data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
            label: "Engagement and Concentration",
            data: [80, 70, 60, 50, 40],
            fill: false,
            borderColor: "#007bff",
            pointRadius: 4,
            pointBackgroundColor: "#007bff",
            pointBorderColor: "#007bff",
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "#007bff",
            pointHoverBorderColor: "#007bff"
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    };

    var lineChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});
