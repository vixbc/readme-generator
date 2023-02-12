// function to generate markdown for README
class MarkDown {
  static renderLicenseBadge(license) {
    const badges = {
      mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      gnuplv3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    return badges[license]
  }

  static renderLicenseLink(license){
    const licenseLink = {
      mit: "https://opensource.org/licenses/MIT",
      isc: "https://opensource.org/licenses/ISC",
      gnupl3: "https://www.gnu.org/licenses/gpl-3.0"
    }
    return licenseLink[license]
  }

  static generateMarkdown(answers) {
    return `
# ${answers.Title}

${this.renderLicenseBadge(answers.License)}

## Table of contents
- [project description](#Description)
- [installation](#Installation)
- [usage](#Usage)
- [license](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${answers.Decription}

## Installation
${answers.Installation}

## Usage
${answers.Usage}

## License
${this.renderLicenseLink(answers.License)}

## Contributing
${answers.Contributing}

## Tests
${answers.Tests}

## Questions
${answers.Questions}`
}
}


module.exports = MarkDown;