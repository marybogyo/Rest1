import DataService from "../Model/DataServive.js"
import TablaView from "../View/TablaView.js"
import UrlapView from "../View/Urlap/UrlapView.js"
export default class Controller{
    constructor(){
        this.dataService=new DataService()

        this.dataService.getData("adatok.json", this.megjelenit)
    }

    megjelenit(list){
        console.log(list)
        //példány. a view-t/Táblázatot
        new TablaView(list, $(".adatok"));
    }
}