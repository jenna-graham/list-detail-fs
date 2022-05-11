// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderChild } from '../renderutils.js';
// import { children } from '../children.js';
const test = QUnit.test;

test('time to test the render Child function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="child" style="top: 400px;"><a href="./child-details/?id=3"><h1>malakai</h1><img src="./assets/malakai.png"></a></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const giyana = {
        id: '3',
        name: 'malakai',
        type: 'malakai',
        image: './assets/malakai.png',
        top: '400px',
        left: '65%',
    };
    const actual = renderChild(giyana);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
