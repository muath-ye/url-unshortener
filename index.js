#!/usr/bin/env node

const { exit } = require('process');
const readline = require('readline');

function getOriginalUrl(shortenedUrl) {
    // Make a request to the shortened URL
    fetch(shortenedUrl)
        .then(response => {
            // Get the final URL after any redirects
            const finalUrl = response.url;
            console.log('Original URL:', finalUrl);
            exit(0);
        })
        .catch(error => {
            console.error('Error:', error);
            exit(0);
        });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get the shortened URL from the command-line argument
const shortenedUrl = process.argv[2];

if (shortenedUrl) {
    getOriginalUrl(shortenedUrl);
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the shortened URL: ', (url) => {
        getOriginalUrl(url)
        rl.close();
    });
}
