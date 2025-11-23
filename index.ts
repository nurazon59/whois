#!/usr/bin/env node

const ansi = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  green: "\x1b[32m",
  white: "\x1b[37m",
};

const boxChars = {
  topLeft: "╭",
  topRight: "╮",
  bottomLeft: "╰",
  bottomRight: "╯",
  horizontal: "─",
  vertical: "│",
};

function stripAnsi(str: string): string {
  return str.replace(/\x1b\[[0-9;]*m/g, "");
}

function boxen(content: string, paddingX = 1): string {
  const lines = content.split("\n");
  const maxLength = Math.max(...lines.map((line) => stripAnsi(line).length));
  const width = maxLength + paddingX * 2;

  const pad = " ".repeat(paddingX);
  const g = ansi.green;
  const r = ansi.reset;

  const top = `${g}${boxChars.topLeft}${
    boxChars.horizontal.repeat(width)
  }${boxChars.topRight}${r}`;
  const bottom = `${g}${boxChars.bottomLeft}${
    boxChars.horizontal.repeat(width)
  }${boxChars.bottomRight}${r}`;
  const emptyLine = `${g}${boxChars.vertical}${r}` + " ".repeat(width) +
    `${g}${boxChars.vertical}${r}`;

  const paddedLines = lines.map((line) => {
    const visibleLength = stripAnsi(line).length;
    const rightPad = " ".repeat(maxLength - visibleLength);
    return `${g}${boxChars.vertical}${r}` + pad + line + rightPad + pad +
      `${g}${boxChars.vertical}${r}`;
  });

  const result = [
    "",
    top,
    emptyLine,
    ...paddedLines,
    emptyLine,
    bottom,
    "",
  ];

  return result.join("\n");
}

const data = {
  name: `${ansi.white}Itsuki Koshiishi${ansi.reset}`,
  handle: `${ansi.white}nurazon59${ansi.reset}`,
  labelGitHub: `${ansi.white}${ansi.bold}GitHub:${ansi.reset}`,
  github: `${ansi.white}https://github.com/nurazon59${ansi.reset}`,
  labelPortfolio: `${ansi.white}${ansi.bold}Portfolio:${ansi.reset}`,
  portfolio: `${ansi.white}https://itk-koshiishi.net/${ansi.reset}`,
  message: `${ansi.white}${ansi.bold}Feel free to contact me!${ansi.reset}`,
};

const heading = `${data.handle} / ${data.name}`;
const github = `${data.labelGitHub} ${data.github}`;
const portfolio = `${data.labelPortfolio} ${data.portfolio}`;

const output = [heading, "", "", github, "", portfolio, "", data.message].join(
  "\n",
);

console.log(boxen(output, 6));
