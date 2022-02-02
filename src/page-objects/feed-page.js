const Page = require("./page");

class FeedPage extends Page {

    //pop-up
    get btnGotIt(){
        return $('id=com.apptegy.mobiletest3:id/b_got_it');
    }
    get lblFeed(){
        return $('id=com.apptegy.mobiletest3:id/combinedFeedToolbar');
    }
     //lower bar
    get btnMenu(){
        return $('id=com.apptegy.mobiletest3:id/tv_menu_and_rooms_classes');
    }
    get btnSchools(){
        // return $('id=com.apptegy.mobiletest3:id/tv_schools_and_rooms_menu');
        return $('//*[@id="com.apptegy.mobiletest3:id/tv_schools_and_rooms_menu"]');
    }
    get tglRooms(){
        return $('id=com.apptegy.mobiletest3:id/apptegySwitch');
    }

    //secondary menu
    get btnClose(){
        return $('id=com.apptegy.mobiletest3:id/b_close');
    }
    get btnSettings(){
        return $('id=com.apptegy.mobiletest3:id/b_settings');
    }
    // Rooms page
    get txtEmail(){
        return $('id=com.apptegy.mobiletest3:id/et_username');
    }
    get txtPassword(){
        return $('id=com.apptegy.mobiletest3:id/et_password');
    }
    get btnSignInRooms(){
        return $('//*[@class="android.widget.Button"]');
    }


    

}
export default new FeedPage();