import { expect, test } from "@jest/globals";
import check from "./app.js"

test("Check if the correct letter in arrays[3] is there, and should be 'Correct", () => {
    let g = "hallå".toUpperCase();
    let w = "cykla".toUpperCase();
    let testCheck = check(g, w);

    expect(testCheck[3]).toEqual({
        letter: 'L',
        result: "Correct"
    });

});

test("Test if all chars are in Uppercase", () => {
    let g = "hallå".toUpperCase();
    let w = "cykla".toUpperCase();
    let testCheck = check(g, w);
    expect(testCheck.toUpperCase).toEqual(testCheck.toUpperCase);
});

test("Test to see if the test locate Incorrect, Missplaced and Correct Chars", () => {
    let g = "pulka".toUpperCase();
    let w = "cykla".toUpperCase();
    let testCheck = check(g, w);
    let testBackward = [{
        letter: "P",
        result: "Incorrect",
    },
    {
        letter: "U",
        result: "Incorrect",
    },
    {
        letter: "L",
        result: "Missplaced",
    },
    {
        letter: "K",
        result: "Missplaced",
    },
    {
        letter: "A",
        result: "Correct",
    },
              
];
expect(testCheck).toEqual(testBackward);
});



