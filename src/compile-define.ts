export const DEFINE_LINE_REGEX = /define (.*) as/;

export function compileDefine(readableCode: string): string {
  const lines = readableCode.split('\n');
  return getFunctionDeclaration(lines[0]) + '\n' +
            lines.slice(1).join('\n') + '\n' +
         '}';
}

function getFunctionDeclaration(line: string) : string {
  const definition = line.match(DEFINE_LINE_REGEX)[1];
  const argsDefinitions = getArgumentsDefinition(definition);
  return buildFunctionDefinition(definition, argsDefinitions);
}

function getArgumentsDefinition(definition: string) {
  return definition.match(/"(.*?)"/g)
    .map((arg) => arg.replace(/"/g, ''))
    .map((arg) => camelize(arg))
    .join(',');
}

function buildFunctionDefinition(definition: string, argsDefinition: string) {
  const functionName = camelize(definition.replace(/"/g, ''));
  return `function ${functionName} (${argsDefinition}) {`;
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}