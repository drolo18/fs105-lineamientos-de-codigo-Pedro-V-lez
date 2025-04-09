
const PRONOUM = ['the', 'our'];
const ADJ = ['great', 'big'];
const NOUN = ['jogger', 'racoones'];
const EXTENSION = [".com", ".net", ".us", ".io", ".es"];

const generateDomain  = ()=>{
    const combinations = [];

    PRONOUM.forEach(pronoun => {
        ADJ.forEach(adj => {
            NOUN.forEach(noun => {
                EXTENSION.forEach(extension => {
                    if (noun === 'racoones' && extension === '.es') {
                        noun = 'racoon';
                    }
                    combinations.push(`${pronoun}${adj}${noun}${extension}`);
                });
            });
        });
    });
    return combinations
}
console.log(generateDomain())

