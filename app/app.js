var app = {
    config: {
        appContainer: document,
        solutionElement: '#mySolution'
    },

    /**
     * Returns a string containing the user's solution as entered on the web page
     * @returns {String}
     */
    getUserSolution: function(){
        return this.config.appContainer.querySelector(this.config.solutionElement);    
    },

    /**
     * Validates a string to see whether it is a well formed function and that the
     * function name matches what is required by the challenge 
     * @returns {boolean}
     */
    validSolution: function(code, functionName){
        try{ eval(code + ';' + functionName + '()'); } catch (e){return {error: e };}
        return true;
    },

    /**
     * Evaluates the supplied solution against a set of inputs and and output
     * Returns true / false depending on whether the test case has been met
     * @returns {boolean}
     */
    correctSolution: function(code, functionName, inputs, output){
        var isValid = this.validSolution(code, functionName);
        if(isValid.hasOwnProperty('error')) return isValid;
        return  eval(code + ';' + functionName + '(' + inputs.join(',') + ')') === output 
    }
}


module.exports = app;