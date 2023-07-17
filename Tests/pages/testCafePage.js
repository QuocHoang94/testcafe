import { Selector } from "testcafe";

class googlePage{
    constructor(){
        this.testCafeLogo = Selector('div[class="logo"]');
    }
}
export default new googlePage();