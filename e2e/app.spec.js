describe('Daily Coding Challenge App', () => {
    it('should display the correct heading', () => {
        browser.get('http://localhost/');
        expect(browser.getTitle()).toEqual('Home');
    })
})