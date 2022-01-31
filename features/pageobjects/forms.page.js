import helpers from "../../utils/helpers";
import Page from "./page";

class FormsPage extends Page{
    /*
    input field
    input validation
    switch
    dropdown option
    option 1
    option 2
    option 3
    btnActive
    btnInactive
    */


    //  ----- Writing Text in Input -----

        //accessibilityID
    get txtInput(){
        return $('~text-input');
    }
        //xpath
    get txtInputXpath(){ 
        return $('//android.widget.EditText[@content-desc="text-input"]');
    }
    
    get lblText(){
        return $('~input-text-result');
    }

    get tglSwitch(){
        return $('~switch');
    }
    

    get btnActive(){
        return $('~button-Active');
    }

}
export default new FormsPage();