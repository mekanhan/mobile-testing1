const Page = require("./page");

class HomePage extends Page {

    lblHome = $('name=Home');
    lblDistrict = $('name=District');
    lblFeed = $('~Feed');
    lblEvents = $('~Events');
    btnSchools = $('//XCUIElementTypeButton[@name="Schools"]');
    btnMenu = $('//XCUIElementTypeButton[@name="Menu"]');
    tglHome = $('//XCUIElementTypeButton[@name="1234567890as"]');
    tglRooms = $('//XCUIElementTypeButton[@name="Rooms"]');
    btnClose = $('//XCUIElementTypeApplication[@name="Poly"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[2]');
    btnClose2 = $('//XCUIElementTypeButton[@name="add"]');
    btnSeeAllSchools = $('name=See All Schools');

}
module.exports = new HomePage();