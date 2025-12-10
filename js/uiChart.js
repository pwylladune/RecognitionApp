import { summarizeByCategory } from "./recognitionModel.js";

let chartInstance = null;

export function initChart() {
  const ctx = document.getElementById("recognitionChart");
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Number of recognitions",
          data: [],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

export function updateChart(entries) {
  if (!chartInstance) return;
  const { labels, data } = summarizeByCategory(entries);
  chartInstance.data.labels = labels;
  chartInstance.data.datasets[0].data = data;
  chartInstance.update();
}
