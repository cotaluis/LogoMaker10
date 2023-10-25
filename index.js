const fs = require('fs');
const SVG = require('svg.js');
const inquirer = require('inquirer');

async function getUserInput() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'output',
            message: 'Enter the output SVG file path:',
            default: 'output.svg',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for the logo:',
            default: 'Hello, Logo!',
        },
    ]);
}

function generateLogo(text) {
    const width = 200;
    const height = 100;

    const canvas = createCanvas(width, height);
    const svg = SVG(canvas);

    svg.rect(width, height).fill('#3498db');
    svg.text(text).move(width / 4, height / 2).font({ size: 20, family: 'Arial', fill: '#ffffff' });

    return svg;
}

function saveLogoToFile(svg, outputPath) {
    const svgString = svg.svg();
    fs.writeFileSync(outputPath, svgString, 'utf-8');
    console.log(`Logo saved to ${outputPath}`);
}

async function main() {
    const userInput = await getUserInput();
    const { output, text } = userInput;

    const logo = generateLogo(text);
    saveLogoToFile(logo, output);
}

main();
