// allows the user to search, select a result, fetch details, and display details

const
    inquirer = require('inquirer')
    words = require('wordsModule')

async function selectOptionPrompt(result)
{
        const result2 = result.definitions[0]
        const result6 = result2.partOfSpeech
        const result5 = result2.definition
        var count = 0;
        var string1 = "";

        const displayWords = Object.keys(result2).map(item=>
        {
            if (count == 0)
            {
                string1 = result5
            }
            else
            {
                string1 = result6
            }
            count++;
            
            return { 
                name: item, //displays names
                value: string1 //what is being returned   
            }
        })
    return inquirer.prompt([{
        type: 'list',
        message:  'Select to see part of speech or definition for ' + JSON.stringify(result.word),
        name: 'words',
        choices: displayWords,
    }])
}

const print = (results) => 
{ 
    console.log('\n --- RESULTS ---')
    console.log(results.words)
    console.log()
}

async function search(words1){
    const word = await words.search(words1);
    const result = await selectOptionPrompt(word)

     print(result)
}

module.exports = {
    search
}  
