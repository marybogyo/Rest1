import { adatLeiro } from "../adatLeiro.js";
export default class UrlapView{
    constructor(szElem){
        this.szElem=szElem;
        //létrehozok egy form taget a szElelmbe
        //létrehozok egy kapaszkodót a form elemhez this.formElem
        this.htmlOsszerak()
    }

    htmlOsszerak(){
        //végigmegyek az adatleiro kulcsain, és létrehozom az egyes beviteli mezőkkel, label és inputtal együtt
        /*pl:   <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                </div>
                végére submit gomb kell*/

    }
}