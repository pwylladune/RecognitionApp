const bodyEl = document.getElementById("entries-body");

export function renderTable(entries, onDelete) {
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
      <td><button data-id="${entry.id}" class="delete-btn">Delete</button></td>
    `;

    const btn = tr.querySelector(".delete-btn");
    btn.addEventListener("click", () => {
      onDelete(entry.id);
    });

    bodyEl.appendChild(tr);
  });
}
