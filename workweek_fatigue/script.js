document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("graph").getContext("2d");
  
    const data = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Engagement and Concentration",
          data: [100, 70, 40, 17, 2],
          fill: true,
          backgroundColor: "rgba(0, 123, 255, 0.3)",
          borderColor: "#007bff",
          pointRadius: 4,
          pointBackgroundColor: "#007bff",
          pointBorderColor: "#007bff",
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#007bff",
          pointHoverBorderColor: "#007bff",
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
      plugins: {
        tooltip: {
          mode: "nearest",
        },
      },
      tension: 0.4, // Controls the curvature of the line (0 = straight lines, 1 = very curved)
    };
  
    const lineChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });
  });
  