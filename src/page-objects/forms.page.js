import Page from '../page-objects/page';

class FormsPage extends Page{
    
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