import React from "react"
import { Counter } from "../Counter"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

let getByTestId;
beforeEach(() => {
    const component = render(<Counter/>);
    getByTestId = component.getByTestId
})

test("header renders with correct text", ()=> {
   
    const headerEl = getByTestId('header');

    expect(headerEl.textContent).toBe("My Counter")
});

test("counter initally start with text of 0", () => {

    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe('0')
})

test("input contains inital value of 1", () => {

    const inputEl = getByTestId('input');

    expect(inputEl.value).toBe('1');
})

test("add button render with +", () => {

    const addBtn = getByTestId('add-btn');

    expect(addBtn.textContent).toBe('+')
})


test("subtract button render with -", () => {

    const subtractBtn = getByTestId('subtract-btn');

    expect(subtractBtn.textContent).toBe('-')
})

test("change value of input works correctly", () => {

    const inputEl = getByTestId('input');

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target:{
            value:"5"
        }
    });

    expect(inputEl.value).toBe("5")
})

test("click on plus btn adds 1 to counter", () => {

    const addBtn = getByTestId('add-btn');
    const counterEl = getByTestId('counter');

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("1")

})

test("click on subtract btn subtracts 1 to counter", () => {

    const subtractBtn = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');

    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("-1")

})

test("changing input value then clicking on add btn works correctly", () => {

    const addBtn = getByTestId('add-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
        target:{
            value: "5"
        }
    })

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("5")

})


test("changinf input value then clicking on substract btn works correctly", () => {

    const addBtn = getByTestId('add-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
        target:{
            value: "-5"
        }
    })

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("-5")

})

test("adding and substracting leads to the correct counter number", () => {

    const addBtn = getByTestId('add-btn');
    const subtractBtn = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
        target:{
            value: "10"
        }
    });

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)

    expect(counterEl.textContent).toBe("10")


})

test("counter contains correct className", () => {

    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');
    const addBtn = getByTestId('add-btn');
    const subtractBtn = getByTestId('subtract-btn');

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target:{
            value: "51"
        }
    });
    fireEvent.click(addBtn)
    
    expect(counterEl.className).toBe("")

    fireEvent.click(addBtn)

    expect(counterEl.className).toBe("green")

    fireEvent.click(addBtn)

    expect(counterEl.className).toBe("green")

    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)

    expect(counterEl.className).toBe("")

    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)
    fireEvent.click(subtractBtn)

    expect(counterEl.className).toBe("red")

})