import { adatLeiro } from "../adatLeiro.js";
export default class UrlapView{
    #obj = {};
    constructor(list, szElem){
        this.szElem=szElem;
        this.#obj= obj;
        this.szElem.append(`<form action="/action_page.php" method="get"></form>`)
        this.formElem = szElem.find("form");
        //létrehozok egy form taget a szElelmbe
        //létrehozok egy kapaszkodót a form elemhez this.formElem
        this.htmlOsszerak()
    }

    htmlOsszerak(){
        let txt = "<div>";
        for (const key in this.#obj) {
                txt += `<label">${this.#obj[key]}</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                <input type="submit" value="Submit">`;
          }
        txt+="</div>"
    
        this.szElem.append(adatLeiro, txt);
        //végigmegyek az adatleiro kulcsain, és létrehozom az egyes beviteli mezőkkel, label és inputtal együtt
        /*pl:   <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                </div>
                végére submit gomb kell*/

    }
}