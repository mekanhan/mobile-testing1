const Page = require("./page");

class FeedPage extends Page {

    //pop-up
    btnGotIt = $('id=com.apptegy.mobiletest3:id/b_got_it');
    lblFeed = $('id=com.apptegy.mobiletest3:id/combinedFeedToolbar');
     //lower bar
    btnMenu = ('id=com.apptegy.mobiletest3:id/tv_menu_and_rooms_classes');
    btnSchools = $('//*[@id="com.apptegy.mobiletest3:id/tv_schools_and_rooms_menu"]');
    tglRooms = $('id=com.apptegy.mobiletest3:id/apptegySwitch');
    //secondary menu
    btnClose = $('id=com.apptegy.mobiletest3:id/b_close');
    btnSettings = ('id=com.apptegy.mobiletest3:id/b_settings');
    
    // Rooms page
    txtEmail = $('id=com.apptegy.mobiletest3:id/et_username');
    txtPassword = $('id=com.apptegy.mobiletest3:id/et_password');
    btnSignInRooms = $('//*[@class="android.widget.Button"]');


}

module.exports = new FeedPage();