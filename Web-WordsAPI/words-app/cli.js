// CLI using yargs for search command
// ex: node cli.js search -k keyword
//  - The CLI app should display a help menu by typing: `node cli.js help`
// - The CLI should include a search command `node cli.js search <item to be search>`
// The CLI portion should not contain the API URL. The CLI should only being using your custom node module.

const
    app = require('./app')
    yargs = require('yargs')

const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'definition',
        desc: 'gives option to get either definition or part of speech of a word',
        builder: (yargs) => {
            return yargs.option('s', {
                alias: 'search',
                describe: 'search for a word'
            })
        },
        handler: (argv) => {app.search(argv.search) }
    })
    .help('help')
    .argv
