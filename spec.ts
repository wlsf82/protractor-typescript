import {browser, element, by} from "protractor";

describe("protractor with typescript typings", () => {
    beforeEach(() =>  browser.get("http://www.angularjs.org"));

    it("should greet the named user", () => {
        const greeting = element(by.binding("yourName"));
        element(by.model("yourName")).sendKeys("Julie");
        expect(greeting.getText()).toEqual("Hello Julie!");
    });

    it("should list todos", () => {
        const todoList = element.all(by.repeater("todo in todoList.todos"));
        expect(todoList.count()).toEqual(2);
        expect(todoList.get(1).getText()).toEqual("build an AngularJS app");
    });

    it("playing with types", () => {
        interface Foo {
            foo: String;
        }

        const bar: Foo = {
            foo: "foo"
        }

        // const bar: Foo = {
        //     bar: "foo"
        // }

        // const bar: Foo = true;

        console.log(bar);
    });
});
