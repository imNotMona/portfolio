function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(el => {
    const file = el.getAttribute("data-include");

    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error("Include failed");
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(() => {
        el.innerHTML = "";
      });
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);