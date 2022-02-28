/*
The Word Translator
Usage: Use simple conditional statements
*/

let language = prompt(`Enter the language code. \n 'es'-Spanish, 'de'-German, 'en'-English, 'fr'-French`);
console.log(`Selected Language: ${language}`);

switch (language) {
    case 'es':
        console.log('Hola Mundo');
        break;
    case 'de':
        console.log('Hallo Welt');
        break;
    case 'en':
        console.log('Hello World');
        break;
    case 'fr':
        console.log('Bonjour le monde');
        break;
    default:
        console.log('Hello World');
}