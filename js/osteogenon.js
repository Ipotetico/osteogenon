// =====   STRONY   =====

const close = document.querySelectorAll(".close");

const allPages = document.querySelectorAll(".page");

const page01 = document.getElementById("page01");

const page02 = document.getElementById("page02");

// =====   BATONY   =====

const btns = document.querySelectorAll(".btn");
const sklad = document.getElementById("sklad");
const zlam = document.getElementById("zlam");
const przebud = document.getElementById("przebud");
const skut = document.getElementById("skut");
const stos = document.getElementById("stos");
const daw = document.getElementById("daw");

// =====   CLOSE   =====

for (let el of close) {
  el.addEventListener("touchstart", () => {
    for (let el of allPages) {
      el.classList.remove("active");
    }
    for (let el of btns) {
      el.classList.remove("active");
    }
  });
}

// =====   STR 1   =====

sklad.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== sklad) {
      el.classList.remove("active");
    }
  }

  for (let el of allPages) {
    el.classList.remove("active");
  }

  page01.classList.add("active");
  sklad.classList.add("active");
});

// =====   STR 2   =====

zlam.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== zlam) {
      el.classList.remove("active");
    }
  }
  for (let el of allPages) {
    el.classList.remove("active");
  }
  page02.classList.add("active");
  zlam.classList.add("active");
});

const tag01 = document.getElementById("osseina");

const tag02 = document.getElementById("hydro");

const closeOsseinaTag = tag01.querySelector(".terminate");

const closeHydroTag = tag02.querySelector(".terminate");

console.log(tag01);
console.log(closeOsseinaTag);

tag01.addEventListener("touchstart", () => {
  tag01.classList.toggle("active");
});

tag02.addEventListener("touchstart", () => {
  tag02.classList.toggle("active");
});

closeOsseinaTag.addEventListener("touchstart", () => {
  tag01.style.backgroundColor = "$osteogenon_yellow";
});

closeHydroTag.addEventListener("touchstart", () => {
  tag02.style.backgroundColor = "grey";
});

// =====   STR 3   =====

przebud.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== przebud) {
      el.classList.remove("active");
    }
  }
  for (let el of allPages) {
    el.classList.remove("active");
  }
  page03.classList.add("active");
  przebud.classList.add("active");
});

const aktywacja = document.getElementById("aktywacja");

const mineral = document.getElementById("mineral");

const grafika03 = page03.querySelector("img:nth-of-type(1)");

aktywacja.addEventListener("touchstart", () => {
  aktywacja.classList.toggle("active");
  mineral.classList.toggle("opac");
  grafika03.classList.toggle("opac");
});

mineral.addEventListener("touchstart", () => {
  mineral.classList.toggle("active");
  aktywacja.classList.toggle("opac");
  grafika03.classList.toggle("opac");
});

// =====   STR 4   =====

skut.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== skut) {
      el.classList.remove("active");
    }
  }
  for (let el of allPages) {
    el.classList.remove("active");
  }
  page04.classList.add("active");
  skut.classList.add("active");
});

// =====   STR 5   =====

stos.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== stos) {
      el.classList.remove("active");
    }
  }
  for (let el of allPages) {
    el.classList.remove("active");
  }
  page05.classList.add("active");
  stos.classList.add("active");
});

// =====   STR 6   =====

daw.addEventListener("touchstart", () => {
  for (let el of btns) {
    if (el !== daw) {
      el.classList.remove("active");
    }
  }
  for (let el of allPages) {
    el.classList.remove("active");
  }
  page06.classList.add("active");
  daw.classList.add("active");
});

const paczka = document.getElementById("paczka");

console.log(paczka);

const sil = document.querySelector(".sil");

paczka.addEventListener("touchstart", () => {
  sil.classList.add("active");
});

sil.addEventListener("touchstart", () => {
  sil.classList.remove("active");
});
