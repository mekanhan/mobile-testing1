import ActionHelper from "../../helpers/actionHelper";
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
    
    //  --- async  ---

    async txtInput_set(input){
        await this.txtInput.setValue(input);
    }

    async txtInputXpath_set(input){
        await this.txtInputXpath.setValue(input);
    }

    async lblText_tap(){
        await this.lblText.getText();
    }

    async tglSwitch_tap(){
        await this.tglSwitch.touchAction('tap');
    }

    async btnActive_tap(element){
        await this.btnActive.touchAction('tap');
    }

}
export default new FormsPage();