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
        };

        // Not valid
        // const bar: Foo = {
        //     bar: "foo"
        // }

        // Not valid
        // const bar: Foo = true;

        console.log(bar);

        interface Bar {
            baz: String;
            bah?: Number;
        }

        const baz: Bar = {
            baz: "Baz"
        };

        const bzzz: Bar = {
            baz: "Baz",
            bah: 1
        };

        // Not valid
        // const baz: Bar = {
        //     baz: "Baz",
        //     bah: "Bah"
        // };

        // Not valid
        // const baz: Bar = {
        //     bah: 1
        // };

        console.log(baz);
        console.log(bzzz);
    });
});
