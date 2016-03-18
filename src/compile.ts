//import {cond} from 'lodash';
//import {compileDefine} from "./compile-define";
//
//const compileUsingLineCompiler = cond<(line:string, iterator: Iterator) => string>([
//  [ (line) => /define (.*) as/.test(line), compileDefine ]
//]);
//
//export function compile(readableCode: string) {
//  let output = '';
//
//  const lines = readableCode.split('\n').entries();
//
//  let currentLineNumber = 0;
//
//
//
//  let currentIteration = lineIterator.next();
//  while (!currentIteration.done) {
//    const currentLine = currentIteration.value[1];
//
//    let lineOutput = undefined;
//    [lineOutput, lineIterator] = compileUsingLineCompiler(currentLine, lineIterator);
//
//    output += lineOutput;
//
//    currentIteration = lineIterator.next();
//  }
//
//  return output;
//}
//
//
