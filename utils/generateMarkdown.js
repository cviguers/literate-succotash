// inputs license type to return official badge
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === 'GNU AGPLv3') {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === 'Mozilla Public License 2.0') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === 'Boost Software License 1.0') {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === 'Apache License 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}

// inputs link to license website
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://opensource.org/licenses/MIT";
  } else if (license === 'GNU AGPLv3') {
    return "https://www.gnu.org/licenses/agpl-3.0";
  } else if (license === 'Mozilla Public License 2.0') {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === 'Boost Software License 1.0') {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license === 'Apache License 2.0') {
    return "https://opensource.org/licenses/Apache-2.0";
  } else {
    return "";
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