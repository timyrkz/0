const $ = (selector) => document.querySelector(selector);
const palette = ['#2563eb', '#7c3aed', '#10b981', '#f59e0b', '#ef4444'];

document.addEventListener('DOMContentLoaded', () => {
  $('.nav-toggle')?.addEventListener('click', () => $('.nav-links')?.classList.toggle('open'));

  document.querySelectorAll('[data-auth-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      localStorage.setItem('esgSession', JSON.stringify({ active: true, createdAt: new Date().toISOString() }));
      window.location.href = 'dashboard.html';
    });
  });

  document.querySelectorAll('.data-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      button.textContent = 'Сохранено ✓';
      setTimeout(() => (button.textContent = 'Сохранить'), 1800);
      form.reset();
    });
  });

  if (window.Chart) renderCharts();
});

function buildLineChart(id, label, data, color = palette[0]) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  new Chart(canvas, {
    type: 'line',
    data: { labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'], datasets: [{ label, data, borderColor: color, backgroundColor: `${color}22`, fill: true, tension: 0.42 }] },
    options: { responsive: true, plugins: { legend: { display: true } }, scales: { y: { beginAtZero: true } } }
  });
}

function renderCharts() {
  const scoreCanvas = document.getElementById('scoreChart');
  if (scoreCanvas) {
    new Chart(scoreCanvas, { type: 'radar', data: { labels: ['Energy', 'Water', 'Carbon', 'Waste', 'Social', 'Governance'], datasets: [{ label: 'Score', data: [88, 81, 76, 84, 91, 86], borderColor: palette[0], backgroundColor: '#2563eb26' }] }, options: { responsive: true, scales: { r: { suggestedMin: 0, suggestedMax: 100 } } } });
  }
  buildLineChart('emissionChart', 'т CO₂e', [1480, 1390, 1320, 1270, 1258, 1248], palette[2]);
  buildLineChart('energyChart', 'МВт·ч', [520, 500, 470, 430, 410, 390], palette[0]);
  buildLineChart('waterChart', 'м³', [810, 790, 760, 740, 710, 690], palette[0]);
  buildLineChart('carbonChart', 'т CO₂e', [310, 298, 275, 260, 244, 230], palette[2]);
  buildLineChart('wasteChart', 'кг', [190, 180, 166, 150, 144, 130], palette[3]);
  buildLineChart('socialChart', 'индекс', [72, 75, 78, 80, 83, 86], palette[1]);
  buildLineChart('governanceChart', 'балл', [68, 72, 76, 79, 83, 88], palette[4]);
}
