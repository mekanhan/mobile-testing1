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
    
}

module.exports = new helpers();