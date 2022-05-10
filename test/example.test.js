// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderChild } from '../renderutils.js';
import { children } from '../children.js';
const test = QUnit.test;

test('time to test the render Child function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="child"><h1>giyana</h1><img src="./assets/giyana.jpg"></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const giyana = {
        name: 'giyana',
        image: './assets/giyana.jpg',
    };
    const actual = renderChild(giyana);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
