class MegjelenitSor {
  #adat = {};

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.index = index;
    this.tablaElem = szuloElem;
    this.#sor();

    this.sorElem = this.tablaElem.find("tr:last");
    this.keszElem = this.sorElem.find(".kesz");
    this.torolElem = this.sorElem.find(".torol");

    this.keszElem.on("click", () => {
      this.#adat.kesz = !this.#adat.kesz; 
      this.setHatterszin();
      this.#esemenyTrigger(this.#adat.kesz ? "kesz" : "megse"); 
    });

    this.torolElem.on("click", () => {
      this.#esemenyTrigger("torles");
    });
  }

  setHatterszin() {
    if (this.#adat.kesz) {
      this.sorElem.css("background-color", "green");
      this.keszElem.text("❌");
    } else {
      this.sorElem.css("background-color", "rgba(37, 34, 30, 0.692)");
      this.keszElem.text("✔️");
    }
  }

  #sor() {
    let txt = "";
    txt += "<tr>";
    for (const key in this.#adat) {
      if (key != "kesz") {
        txt += `<td>${this.#adat[key]}</td>`;
      }
    }
    txt += `<td><span class="kesz">${this.#adat.kesz ? "❌" : "✔️"}</span> <span class="torol">🗑</span></td>`;
    txt += "</tr>";
    this.tablaElem.append(txt);
  }

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemeny);
  }
}

export default MegjelenitSor;


