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
        type: 'input',
        name: 'projectName',
        message: 'Project Name:',
        default: this.appname
      },
      {
        type: 'input',
        name: 'testFramework',
        message: 'Karma or jest (K/j)',
        default: 'Karma'
      },
      {
        type: 'confirm',
        name: 'generate',
        message: 'Would you like to create a new folder for the boilerplate?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.generate = props.generate;
      this.projectName = props.projectName;
      this.testFramework = props.testFramework;
    });
  }

  writing() {
    let sourceDir = this.projectName;

    if (this.generate) {
      mkdirp(sourceDir, err => {
        if (err) {
          console.log(err);
          console.log('Try Again');
          return;
        }
        this.destinationRoot(sourceDir);
        genPackage.apply(this);
      });
    } else {
      genPackage.apply(this);
    }
  }

  install() {
    // This.yarnInstall();
  }
};

function genPackage() {
  if (
    this.testFramework === 'Jest' ||
    this.testFramework === 'jest' ||
    this.testFramework === 'j' ||
    this.testFramework === 'J'
  ) {
    this.fs.copyTpl(
      this.templatePath('jest.package.json'),
      this.destinationPath(`package.json`),
      {
        name: this.projectName
      }
    );
    this.fs.copy(
      this.templatePath('**/!(_package.json|karma*|jest*|spec)'),
      this.destinationRoot()
    );
    this.fs.copy(this.templatePath('.*'), this.destinationRoot());
    this.fs.copyTpl(
      this.templatePath('spec/jest.spec.ts'),
      this.destinationPath(`spec/app.spec.ts`)
    );
  } else {
    this.fs.copyTpl(
      this.templatePath('karma.package.json'),
      this.destinationPath(`package.json`),
      {
        name: this.projectName
      }
    );
    this.fs.copy(
      this.templatePath('**/!(_package.json|jest*|spec|karma.package.json)'),
      this.destinationRoot()
    );
    this.fs.copy(this.templatePath('.*'), this.destinationRoot());
  }
}
