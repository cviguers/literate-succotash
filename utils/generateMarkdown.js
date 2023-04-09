// inputs license type to return official badge
const renderLicenseBadge = (data) => {
  let licenseOption = `${data.license}`
  let chosenLicense = ""

  if (licenseOption === 'MIT') {
    chosenLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseOption === 'GNU AGPLv3') {
    chosenLicense = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (licenseOption === 'Mozilla Public License 2.0') {
    chosenLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (licenseOption === 'Boost Software License 1.0') {
    chosenLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (licenseOption === 'Apache License 2.0') {
    chosenLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    chosenLicense = "";
  }

  return chosenLicense
}

// inputs link to license website
const renderLicenseLink = (data) => {
  let licenseOption = `${data.license}`
  let chosenLicense = ""

  if (licenseOption === 'MIT') {
    chosenLicense = `(https://opensource.org/licenses/MIT)`;
  } else if (licenseOption === 'GNU AGPLv3') {
    chosenLicense = `(https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (licenseOption === 'Mozilla Public License 2.0') {
    chosenLicense = `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (licenseOption === 'Boost Software License 1.0') {
    chosenLicense = `(https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (licenseOption === 'Apache License 2.0') {
    chosenLicense = `(https://opensource.org/licenses/Apache-2.0)`;
  } else {
    chosenLicense = "";
  }

  return chosenLicense
}

// creates function to build license section, allows section to be blank if none is chosen
const renderLicenseSection = (data) => {
  let licenseOption = `${data.license}`
  let chosenLicense = ""

  if (licenseOption !== "None") {
    chosenLicense =
    `
    Licensed under the ${licenseOption} license. For more information, visit: ${renderLicenseLink(data)}
    `;
  } else {
    chosenLicense = "";
  }
  return chosenLicense
}

// template literal is the design of the .md
const generateMarkdown = (data) =>
  `
  ${renderLicenseBadge(data)}
  # ${data.title}
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
  ## License
  ${renderLicenseSection(data)} 
  ## How to Contribute
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any additional questions, please contact ${data.name} at ${data.email} or https://github.com/${data.github}`;

module.exports = generateMarkdown;