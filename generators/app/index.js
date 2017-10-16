'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the awesome ' + chalk.red('generator-wp-2-tsc') + ' generator!')
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'generate',
        message: 'Would you like to generate the boilerplate?',
        default: true
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Project Name:',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.generate = props.generate;
      this.projectName = props.projectName;
    });
  }

  writing() {
    let sourceDir = 'src';
    mkdirp(sourceDir, err => {
      if (err) {
        console.log(err);
        console.log('Try Again');
        return;
      }
      this.fs.copy(this.templatePath('**/*'), this.destinationRoot());
      this.fs.copy(this.templatePath('.*'), this.destinationRoot());
    });
  }

  install() {
    this.yarnInstall();
  }
};
