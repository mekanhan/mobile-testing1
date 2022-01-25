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
    get txtInput(){
        return $('~text-input');        // accessibilityID
    }

    get btnActive(){
        return $('~button-Active');
    }

    async txtInput_set(input){
        await this.txtInput.setValue(input);
    }

    async btnActive_tap(){
        await this.btnActive.touchAction('tap');
    }

}
export default new FormsPage();