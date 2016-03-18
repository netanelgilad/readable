import chai = require('chai');
import {compileDefine} from "./compile-define";

describe('readable', () => {
  describe('compile define', () => {

    it('should compile a define with a single line body into a function', () => {
      testCase('define the sum of "a number" and "another number" as\n' +
               '  return aNumber + anotherNumber',

               'function theSumOfANumberAndAnotherNumber (aNumber,anotherNumber) {\n' +
               '  return aNumber + anotherNumber\n' +
               '}');
    });

    it('should compile a define with multi line body into a function', () => {
      testCase('define the string "a string" without quotes as\n' +
               '  let result = aString.replace(/"/g, \'\');\n' +
               '  return result;',

               'function theStringAStringWithoutQuotes (aString) {\n' +
               '  let result = aString.replace(/"/g, \'\');\n' +
               '  return result;\n' +
               '}');
    });

    it('should compile a define call line into a function call', () => {
      testCase('define ');
    });
  });

  function testCase(readableCode: string, expectedJs: string) {
    let actualJs = compileDefine(readableCode);
    chai.expect(actualJs).to.equal(expectedJs);
  }
});