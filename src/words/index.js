import { adjectives } from "./adjectives";
import { gerunds } from "./gerunds";
import { nouns } from "./nouns";
// import { adverbs } from "./adverbs";

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-"];

function generateNewPassword() {
  let pw = "";
  let selectedAdjective = adjectives[getRandomInt(adjectives.length - 1)];
  let selectedGerund = gerunds[getRandomInt(gerunds.length - 1)];
  let selectedNoun = nouns[getRandomInt(nouns.length - 1)];

  pw += capitalize(selectedAdjective);
  pw += capitalize(selectedGerund);
  pw += capitalize(selectedNoun);
  pw += specialCharacters[getRandomInt(specialCharacters.length - 1)];
  pw += getRandomInt(9);
  if (pw.length < 20) {
    pw += getRandomInt(9);
  }
  return pw;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export { generateNewPassword };