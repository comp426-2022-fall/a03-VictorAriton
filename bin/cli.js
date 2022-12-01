#!/usr/bin/env node

import minimist from "minimist"
import roll from "../lib/roll.js"

const args = minimist(process.argv.slice(2));

// Including ||6, ||2, ||1 is not needed i guess

const sides = args.sides;
const dice = args.dice;
const rolls = args.rolls;


console.log(JSON.stringify(roll(sides, dice, rolls)));