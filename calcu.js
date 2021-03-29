
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



        // element(by.xpath(result)).getText().then(function(text){
        //     expect(text).toEqual('4');
        // });

        // element(by.repeater("result in memory")).element(by.css("td:nth-child(3")).getText().then(function (text1) {
        //     expect(text1).toEqual('4');
        // })

        // element.all(by.repeater("result in memory")).count().then(function (cnt) {
        //     console.log(cnt);
        // });

    //     element.all(by.repeater("result in memory")).each(function (item) {
    //
    //         item.element(by.css("td:nth-child(3")).getText().then(function (tex){
    //             console.log(tex);
    //         })
    //
    //     });
    //
    //     //actions
    //
    //     browser.actions().mouseMove(element(by.css(""))).sendKeys("123").perform();
    //
    //     //alerts cann be accepted or dismiss
    //
    //     browser.switchTo().alert().accept().then(function () {
    //           browser.sleep(5000);
    //     });
    //
    //     browser.switchTo().frame("id");
    //
    //
    // })

    // it('Open the browser with multiplication',function () {
    //
    //     element(by.xpath(element1)).sendKeys("2").then(function () {
    //         browser.sleep(5000);
    //     });
    //     element(by.xpath(operator)).click();
    //     element(by.xpath(multiply)).click();
    //     element(by.xpath(element2)).sendKeys("2");
    //     element(by.id(go)).click();
    //
    //     console.log("Element clicked");
    //
    // });


