class helpers {
    async tapElement(element) {
        await element.touchAction('tap');
    }
    async write(element, text) {
        await element.setValue(text)
    }
    async scrollTo(element){
        driver.touchScroll(10, 200, element);
    }
    async back(){
        await driver.back();
    }
   
    
}

module.exports = new helpers();