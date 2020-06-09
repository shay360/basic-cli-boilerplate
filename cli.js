#! /usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const colors = require('colors');
const inquirer = require('inquirer');

program.version('0.0.1')
    .description('Cli description');

program.command('init')
    .description('Start new project'.blue)
    .action(() => {
        inquirer
            .prompt([
                {type: 'input', name: 'example_input', message: "Example Input"},
            ])
            .then(answers => {
            });
    });

program.parse(process.argv);
