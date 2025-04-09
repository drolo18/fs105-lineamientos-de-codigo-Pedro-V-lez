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


const WHO = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const ACTION = ['ate', 'peed', 'crushed', 'broke'];
const WHAT = ['my homework', 'my phone', 'the car'];
const WHEN = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const getRandomIndex = (list) => Math.floor(Math.random() * list.length);


const getPhraseElement = (list, index) => list[index];


const excuseGenerator = () => {
const who = getPhraseElement(WHO, getRandomIndex(WHO));
const action = getPhraseElement(ACTION, getRandomIndex(ACTION));
const what = getPhraseElement(WHAT, getRandomIndex(WHAT));
const when = getPhraseElement(WHEN, getRandomIndex(WHEN));

return `${who} ${action} ${what} ${when}.`; 
};

const chooseYourExcuseOrDomainName =(type) =>{
    if (type === "domain"){ 
        return generateDomain()
    }
    return excuseGenerator()

}
//console.log(chooseYourExcuseOrDomainName("domain"))
console.log(chooseYourExcuseOrDomainName())


