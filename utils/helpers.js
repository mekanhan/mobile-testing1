class helpers {
    async tapElement(element) {
        await element.touchAction('tap');
    }

    async write(element, text) {
        await element.setValue(text)
    }


    
}

module.exports = new helpers();