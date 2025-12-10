export function initForm(onSubmit) {
  const form = document.getElementById("recognition-form");
  const recipientInput = document.getElementById("recipient");
  const giverInput = document.getElementById("giver");
  const categoryInput = document.getElementById("category");
  const descriptionInput = document.getElementById("description");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onSubmit({
      recipient: recipientInput.value,
      giver: giverInput.value,
      category: categoryInput.value,
      description: descriptionInput.value
    });
  });

  return {
    reset() {
      form.reset();
    }
  };
}
