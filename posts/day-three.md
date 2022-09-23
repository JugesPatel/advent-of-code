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

Turns out I need to figure out my *life support* rating as well. Wouldn't want to run out down here. This calculation will be done by multiplying the *oxygen generator rating* and *CO2 scrubber rating*. This one requires a bit of recursion since the problem set will be lower every time. Let's see what we can come up with.

### Second Solution

```js
function getOxygenRating(inputArray, bitPosition) {
  let onesLeadingArray = [];
  let zerosLeadingArray = [];
  let onesCount = 0;
  let zerosCount = 0;

  for (let i = 0; i < inputArray.length; i++) {
    // Count the number of ones or zeros and track them in an array using the bit position.
    if (parseInt(inputArray[i][bitPosition]) === 1) {
      onesCount += 1;
      onesLeadingArray.push(inputArray[i]);
    } else {
      zerosCount += 1;
      zerosLeadingArray.push(inputArray[i]);
    }
  }

  // If we only have one input in the array left, return the result.
  if (inputArray.length === 1) {
    return inputArray[0];
  }

  // Based on our criteria, if we have a tie or ones is greater than zeros, call the function again with the ones array.
  // If not, call it with the zeros array.
  if (onesCount >= zerosCount) {
    return getOxygenRating(onesLeadingArray, bitPosition + 1);
  } else {
    return getOxygenRating(zerosLeadingArray, bitPosition + 1);
  }
}

function getScrubberRating(inputArray, bitPosition) {
  let onesLeadingArray = [];
  let zerosLeadingArray = [];
  let onesCount = 0;
  let zerosCount = 0;

  for (let i = 0; i < inputArray.length; i++) {
    // Count the number of ones or zeros and track them in an array using the bit position.
    if (parseInt(inputArray[i][bitPosition]) === 1) {
      onesCount += 1;
      onesLeadingArray.push(inputArray[i]);
    } else {
      zerosCount += 1;
      zerosLeadingArray.push(inputArray[i]);
    }
  }

  // If we only have one input in the array left, return the result.
  if (inputArray.length === 1) {
    return inputArray[0];
  }

  // Based on our criteria, if we have the count of ones less than zero then call the function again with the ones array.
  // If not, call it with the zeros array.
  if (onesCount < zerosCount) {
    return getScrubberRating(onesLeadingArray, bitPosition + 1);
  } else {
    return getScrubberRating(zerosLeadingArray, bitPosition + 1);
  }
}

function calculateLifeSupport(inputArray) {
  const oxygenRating = getOxygenRating(inputArray, 0);
  const scrubberRating = getScrubberRating(inputArray, 0);

  return parseInt(oxygenRating, 2) * parseInt(scrubberRating, 2);
};
```
