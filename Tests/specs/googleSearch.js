import googlePage from "../pages/googlePage";
import testCafePage from "../pages/testCafePage";

fixture`Google Search`.page('https://www.google.com/');
test('Google Search Validation', async t=>{
    await t 
    .maximizeWindow()
    // .debug()
    .typeText(googlePage.searchTxtBox , 'TestCafe')
    .pressKey('enter')
    .click(googlePage.searchResult)
    .expect((testCafePage.testCafeLogo.visible)).eql(true);
})