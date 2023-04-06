// inputs license type to return official badge
function renderLicenseBadge(data) {
  let licenseOption = `${data.license}`
  let chosenLicense = ""
  if (licenseOption === 'MIT') {
    return chosenLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseOption === 'GNU AGPLv3') {
    return chosenLicense = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (licenseOption === 'Mozilla Public License 2.0') {
    return chosenLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (licenseOption === 'Boost Software License 1.0') {
    return chosenLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (licenseOption === 'Apache License 2.0') {
    return chosenLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return chosenLicense = "";
  }
}

// inputs link to license website
function renderLicenseLink(data) {
  let licenseOption = `${data.license}`
  let chosenLicense = ""
  if (licenseOption === 'MIT') {
    return chosenLicense = "https://opensource.org/licenses/MIT";
  } else if (licenseOption === 'GNU AGPLv3') {
    return chosenLicense = "https://www.gnu.org/licenses/agpl-3.0";
  } else if (licenseOption === 'Mozilla Public License 2.0') {
    return chosenLicense = "https://opensource.org/licenses/MPL-2.0";
  } else if (licenseOption === 'Boost Software License 1.0') {
    return chosenLicense = "https://www.boost.org/LICENSE_1_0.txt";
  } else if (licenseOption === 'Apache License 2.0') {
    return chosenLicense = "https://opensource.org/licenses/Apache-2.0";
  } else {
    return chosenLicense = "";
  }
}

// creates function to build license section, allows section to be blank if none is chosen
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    ## License
    Licensed under the ${license} license.
    ${renderLicenseLink(license)}
    `;
  } else {
    return "";
  }
}

// template literal is the design of the .md
const generateMarkdown = (data) =>
  `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  Created by ${data.name}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## How to Contribute
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any additional questions, please contact me at ${data.email} or https://github.com/${data.github}`;

module.exports = generateMarkdown;