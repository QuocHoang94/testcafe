import { Selector } from "testcafe";

class googlePage {
  constructor() {
    
    this.searchTxtBox = Selector("textarea").withAttribute("title", "Tìm kiếm");
    this.searchResult = Selector("h3").withText("TestCafe");
  }
}
export default new googlePage();
