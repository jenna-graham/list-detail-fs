// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderChild } from '../renderutils.js';
// import { children } from '../children.js';
const test = QUnit.test;

test('time to test the render Child function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="child" style="bottom: -200px;"><a href="./child-details/?id=3"><h1>Malakai</h1><img src="./assets/malakai.png"></a></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const malakai = {
        id: '3',
        name: 'Malakai',
        image: './assets/malakai.png',
        bottom: '-200px',
        left: '65%',
    };
    const actual = renderChild(malakai);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
