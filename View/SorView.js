export default class SorView {
  #obj = {};
  constructor(index, obj, szElem) {
    this.#obj = obj;
    this.index = index;
    this.szElem = szElem;
    console.log(this.#obj);
    this.htmlOsszerak();
  }

  htmlOsszerak() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      txt += `<td>${this.#obj[key]}</td>`;
    }
    txt += "</tr>";
    console.log(txt);
    this.szElem.append(txt);
  }
}
