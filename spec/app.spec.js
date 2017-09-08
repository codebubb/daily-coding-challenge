var app = require('../app/app');



describe("running test cases", () => {
    var test, parameterTest, validUserSolution, brokenUserSolution, invalidUserSolution, parameterSolution;
    beforeEach(function () {
        test =
            {
                functionName: 'mockFunction',
                testCases: [
                    { inputs: [true], output: true }
                ]
            }

        validUserSolution = `function ${test.functionName}(){ return true }`;
        brokenUserSolution = `function ${test.functionName}(){ return ${test.testCases[0].output} `;
        invalidUserSolution = `function ${test.functionName}(){ return false; }`;


        parameterTest =
            {
                functionName: 'mockFunction',
                testCases: [
                    { inputs: [1, 2, 3], output: 6 }
                ]
            }


    });

    it("should check the solution is a valid function", () => {

        /**
         * Validate the user's solution (check if it's actually a well formed function)
         */
        console.log(validUserSolution);
        expect(app.validSolution(validUserSolution, test.functionName)).toBeTruthy();
        expect(app.validSolution(validUserSolution, 'nofunction()').error).toBeTruthy();
        expect(app.validSolution(brokenUserSolution, test.functionName).error).toBeTruthy();
    });

    /**
     * The app should be able to evaluate the provided code against a series of test cases
     */
    it("should evaluate the solution", () => {
        expect(app.correctSolution(validUserSolution, test.functionName, test.testCases[0].inputs, true)).toEqual(true)
        expect(app.correctSolution(invalidUserSolution, test.functionName, test.testCases[0].inputs, true)).toEqual(false)
        expect(app.correctSolution(brokenUserSolution, test.functionName, test.testCases[0].inputs, true).error).toBeTruthy();
    })

    /**
     * The app should be able to handle functions with parameters
     */
    it("should be able to test with parameters in the function", () => {
        // First one that works (1 + 2 + 3 === 6)
        parameterSolution = `function mockFunction(a,b,c){ return a+b+c;}`;
        expect(app.correctSolution(parameterSolution, parameterTest.functionName, parameterTest.testCases[0].inputs, 6)).toBe(true);
        // And one that doesn't (1 + 2 !== 6)
        parameterSolution = `function mockFunction(a,b,c){ return a+b;}`;
        expect(app.correctSolution(parameterSolution, parameterTest.functionName, parameterTest.testCases[0].inputs, 6)).toBe(false);
    })
})