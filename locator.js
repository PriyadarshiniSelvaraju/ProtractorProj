module.exports = new locator();

function locator() {


    this.getURL = browser.get("http://juliemr.github.io/protractor-demo");
    this.num1 = "2";
    this.num2 = "2";
    this.firstBtn = element(by.xpath("//input[contains(@ng-model,'first')]"));
    this.secondBtn = element(by.xpath("//input[contains(@ng-model,'second')]"));
    this.operator = element(by.xpath("//select[contains(@ng-model,'operator')]"));
    this.add = element(by.xpath("//option[@value='ADDITION'][contains(.,'+')]"));
    this.multiply = element(by.xpath("//option[@value='MULTIPLICATION'][contains(.,'*')]"));
    this.go = element(by.id("gobutton"));
    this.result = element(by.xpath("//h2[@class='ng-binding'][contains(.,'4')]"));
    this.allVar = by.repeater("result in memory");
    this.getTD = by.css("td:nth-child(3)");
}