const nameInput = document.getElementById("nameInput");
const personalizeBtn = document.getElementById("personalizeBtn");
const dearLine = document.getElementById("dearLine");
const revealBtn = document.getElementById("revealBtn");
const overlay = document.getElementById("roseOverlay");
const closeOverlayBtn = document.getElementById("closeOverlayBtn");

personalizeBtn.addEventListener("click", () => {
  const rawName = nameInput.value.trim();
  if (!rawName) {
    dearLine.textContent = "Dear You,";
    pulseElement(dearLine);
    return;
  }

  const prettyName = rawName
    .split(" ")
    .filter(Boolean)
    .map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join(" ");

  dearLine.textContent = `Dear ${prettyName},`;
  pulseElement(dearLine);
});

revealBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
  });
});

closeOverlayBtn.addEventListener("click", () => {
  overlay.classList.remove("visible");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 280);
});

function pulseElement(el) {
  el.style.transition = "transform 0.18s ease-out";
  el.style.transform = "scale(1.06)";
  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 180);
}
