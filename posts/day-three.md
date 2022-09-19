---
title: 'Day Three - Binary Diagnostic'
date: '2022-09-18'
---

## Part One

Reaching my position from the inputs, it sounds like the pressure at these depths is putting some strain on this sub. I'm going to run a diagnostic just in case. This will give me the *gamma rate* and *epsilon rate* which I can use to find out power consumption. The *gamma rate* will be determined by finding the most common bit in the corresponding position of the diagnostic report. The *epsilon rate* will be the least common bit. It's a good thing this is binary so we only have two bits to deal with. This means that we only have to track the occurrence of one bit since we know the count of the other will be the occurrence subtract the total.

### First Solution

```js
function calculatePowerConsumption(inputArray) {
  let countOnesMap = new Map();

  // Iterate through the array and count all the ones in each position.
  for (let i = 0; i < inputArray.length; i++) {

    // Iterate through the input string positions.
    for (let j = 0; j < inputArray[i].length; j++) {

      // Using the index of the character position as a key, we can track the occurrences of ones.
      if (parseInt(inputArray[i][j]) === 1) {
        countOnesMap.set(j, countOnesMap.get(j) + 1 || 1);
      } else {
        // Need to do this to keep the order of the keys
        countOnesMap.set(j, countOnesMap.get(j) || 0);
      }
    }
  }

  let gammaString = '';
  let epsilonString = '';

  // Iterate through our object to determine the gamma and epsilon value.
  for (const [, value] of countOnesMap) {
    /**
     * Since we only track occurrences of ones, we can determine occurrences of zeros by subtracting
     * the length of the input array with the occurrences of ones.
     */
    if (value > (inputArray.length - value)) {
      gammaString += '1';
      epsilonString += '0';
    } else {
      gammaString += '0';
      epsilonString += '1';
    }
  }

  return parseInt(gammaString, 2) * parseInt(epsilonString, 2);
};
```

## Part Two

Turns out I need to figure out my *life support* rating as well. Wouldn't want to run out down here. This calculation will be done by multiplying the *oxygen generator rating* and *CO2 scrubber rating*.

### Second Solution
