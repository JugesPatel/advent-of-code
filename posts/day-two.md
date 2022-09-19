---
title: 'Day Two - Piloting'
date: '2022-09-18'
---

## Part One

The submarine given to me by the elves seems to take a series of commands like `forward 1`, `down 2`, or `up 3`. It seems like I can move horizontally with `forward` and I need to use `down` or `up` to change my depth. Let's use the inputs given to me to determine my position.

The elves don't like to work in negatives since they are a positive bunch. So I am assuming the input values for each command is a positive integer. If for some reason the inputs went haywire, I would confirm what a negative down value does for instance by radioing the elves.

### First Solution

```js
function calculatePosition(inputArray) {
  // Initialize my starting position.
  let horizontalPos = 0;
  let depth = 0;

  for (let i = 0; i < inputArray.length; i++) {
    // Parse my current command by splitting my command and value.
    let command = inputArray[i].split(' ');

    switch (command[0]) {
      case 'forward':
        horizontalPos += parseInt(command[1]);
        break;
      case 'down':
        // Add to my depth if I move down
        depth += parseInt(command[1]);
        break;
      case 'up':
        // Subtract from my depth if I move up
        depth -= parseInt(command[1]);
        break;
      default:
        break;
    }
  }

  return horizontalPos * depth;
};
```

## Part Two

These calculations don't make any sense! Turns out I skimmed the docs a little too fast and the instructions are a little more complicated than I thought. Apparently I also need to track a third value `aim` alongside my depth and horizontal position. The commands `down` and `up` increase or decrease my aim. The command `forward` actually does two things, increases my horizontal position by `X` and increases my depth by `aim * X`. Let's try to recalibrate.

### Second Solution

```js
function calculateAimedPosition(inputArray) {
  // Initialize my starting position.
  let horizontalPos = 0;
  let aim = 0;
  let depth = 0;

  for (let i = 0; i < inputArray.length; i++) {
    // Parse my current command by splitting my command and value.
    let command = inputArray[i].split(' ');

    switch (command[0]) {
      case 'forward':
        // Calculate horizontal position and depth.
        horizontalPos += parseInt(command[1]);
        depth += parseInt(command[1]) * aim;
        break;
      case 'down':
        // Add to my aim if I move down.
        aim += parseInt(command[1]);
        break;
      case 'up':
        // Subtract from my aim if I move up.
        aim -= parseInt(command[1]);
        break;
      default:
        break;
    }
  }

  return horizontalPos * depth;
};
```
