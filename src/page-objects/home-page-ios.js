const Page = require("./page");

class HomePageIOS extends Page {

    get lblHome(){
        return $('name=Home');
    }
    get lblDistrict(){
        return $('name=District');
    }
    get lblFeed(){
        return $('~Feed');
    }
    get lblEvents(){
        return $('~Events');
    }
    get btnSchools(){
        return $('//XCUIElementTypeButton[@name="Schools"]');
    }
    get btnMenu(){
        return $('//XCUIElementTypeButton[@name="Menu"]');
    }
    get tglHome(){
        return $('//XCUIElementTypeButton[@name="1234567890as"]');
    }
    get tglRooms(){
        return $('name=Rooms');
    }
    // My Schools page
    get lblMySchools(){
        return $()
    }
    get btnClose(){
        return $('name=add');
    }
    get btnSeeAllSchools(){
        return $('name=See All Schools');
    }

}
export default new HomePageIOS();