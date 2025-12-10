export function validateEntry({ recipient, giver, category, description }) {
  const trimmed = {
    recipient: recipient.trim(),
    giver: giver.trim(),
    category: category.trim(),
    description: description.trim()
  };

  if (!trimmed.recipient || !trimmed.giver || !trimmed.category || !trimmed.description) {
    return { ok: false, error: "All fields are required.", value: null };
  }

  return { ok: true, error: null, value: trimmed };
}

export function createEntry({ recipient, giver, category, description }) {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    recipient,
    giver,
    category,
    description,
    date: new Date().toISOString()
  };
}

export function summarizeByCategory(entries) {
  const counts = {};
  entries.forEach(e => {
    counts[e.category] = (counts[e.category] || 0) + 1;
  });
  const labels = Object.keys(counts);
  const data = labels.map(l => counts[l]);
  return { labels, data };
}
