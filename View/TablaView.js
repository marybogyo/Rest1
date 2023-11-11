import FejlecView from "./FejlecView.js";
import SorView from "./SorView.js";
import  {adatLeiro} from "./adatLeiro.js"
export default class TablaView {
  #list = [];
  constructor(list, szElem) {
    console.log(adatLeiro)
    this.#list = list;
    console.log(this.#list);
    szElem.append(`<table class='table table-striped'> 
                        <thead></thead>
                        <tbody></tbody>
                        </table>`);
     this.tbodyElem = szElem.find("tbody")
     this.theadElem = szElem.find("thead")

     new FejlecView(adatLeiro, this.theadElem)
     this.sorMegjelenit();  
  }

  sorMegjelenit(){
    //itt fogjuk péld. a sort annyiszor ahány elem van a listában
    this.#list.forEach((elem, index)=>{
        new SorView(index, elem, this.tbodyElem)
    })
  }
}
