// Confirmación de reserva
document.getElementById("reservaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("reservaConfirmacion").textContent =
    "✅ ¡Reserva confirmada! Te esperamos en LaRocleta.";
});

// Filtro de platos
const botonesFiltro = document.querySelectorAll(".filtros button");
const platos = document.querySelectorAll(".plato");

botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    document.querySelector(".filtros .activo").classList.remove("activo");
    boton.classList.add("activo");
    const categoria = boton.dataset.categoria;

    platos.forEach(plato => {
      plato.style.display =
        categoria === "todos" || plato.dataset.categoria === categoria
          ? "block"
          : "none";
    });
  });
});