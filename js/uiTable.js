const bodyEl = document.getElementById("entries-body");

export function renderTable(entries) {
  bodyEl.innerHTML = "";
  const sorted = entries.slice().sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  sorted.forEach(entry => {
    const tr = document.createElement("tr");
    const dateText = new Date(entry.date).toLocaleString();

    tr.innerHTML = `
      <td>${dateText}</td>
      <td>${entry.recipient}</td>
      <td>${entry.giver}</td>
      <td>${entry.category}</td>
      <td>${entry.description}</td>
    `;
    bodyEl.appendChild(tr);
  });
}
