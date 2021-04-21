
describe("test suite",function () {
    var obj = require('./locator.js');

    beforeEach(function () {
     obj.getURL;
    })


    function operator(){
        obj.firstBtn.sendKeys(obj.num1).then(function () {
            browser.sleep(5000);
        });
        obj.secondBtn.sendKeys(obj.num2).then(function () {
            browser.sleep(5000);
        });
        obj.operator.click();
    }

    it('Open the browser with addition', function () {
        operator();
        obj.add.click();
        obj.go.click();
        console.log("Element clicked");
        obj.result.getText().then(function (text) {
            expect(text).toEqual('4');
        });

    });

    it('Open the browser with multiplication', function () {
        operator();
        obj.multiply.click();
        obj.go.click();
        console.log("Element clicked");
        obj.result.getText().then(function (text) {
            expect(text).toEqual('4');
        });
    });

    it('Verify the all text in the result', function () {
        element.all(obj.allVar).each(function(item)
        {
            item.element(obj.getTD).getText().then(function(text)
            {
                console.log(text);
                expect(text).toEqual('4');
            })

        })
    });


})

