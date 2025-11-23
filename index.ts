import chalk from "npm:chalk@5";
import boxen from "npm:boxen@8";

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round" as const,
};

const data = {
  name: chalk.white("Itsuki Koshiishi"),
  handle: chalk.white("nurazon59"),
  labelGitHub: chalk.white.bold("GitHub:"),
  github: chalk.white("https://github.com/") + chalk.white("nurazon59"),
  labelPortfolio: chalk.white.bold("Portfolio:"),
  portfolio: chalk.white("https://itk-koshiishi.net/"),
  message: chalk.white.bold("Feel free to contact me!"),
};

const newline = "\n";
const heading = `${data.handle} / ${data.name}`;
const github = `${data.labelGitHub} ${data.github}`;
const portfolio = `${data.labelPortfolio} ${data.portfolio}`;
const messaging = data.message;

const output =
  heading +
  newline +
  newline +
  newline +
  github +
  newline +
  newline +
  portfolio +
  newline +
  newline +
  messaging;

console.log(chalk.green(boxen(output, boxenOptions)));
