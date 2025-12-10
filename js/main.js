import { loadEntries, saveEntries } from "./storage.js";
import { validateEntry, createEntry } from "./recognitionModel.js";
import { initForm } from "./uiForm.js";
import { renderTable } from "./uiTable.js";
import { initChart, updateChart } from "./uiChart.js";

let entries = [];

function syncUI() {
  renderTable(entries, handleDeleteEntry);
  updateChart(entries);
}

function handleDeleteEntry(id) {
  entries = entries.filter(e => e.id !== id);
  saveEntries(entries); // overwrite localStorage with new array[web:128][web:134]
  syncUI();
}

function handleNewEntry(rawData) {
  const result = validateEntry(rawData);
  if (!result.ok) {
    alert(result.error);
    return;
  }

  const entry = createEntry(result.value);
  entries.push(entry);
  saveEntries(entries);
  syncUI();
  formController.reset();
}

entries = loadEntries();
initChart();
syncUI();
const formController = initForm(handleNewEntry);
