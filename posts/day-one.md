---
title: 'Day One - Sonar Sweep'
date: '2022-09-18'
---

## Part One

The elves have provided me with a submersible device equipped with a sonar system. The report however is a little cryptic. Each line is a measurement of the depth of the sea floor. I need to find out how quickly the depth increases. To do this, I will have to iterate through the inputs to see each increase.

### First Solution

```js
function calculateDepthIncrease(inputArray) {
  let depthIncreases = 0;
  // Can't trust faulty inputs since this mission is critical.
  if (Array.isArray(inputArray)) {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i + 1] > inputArray[i]) depthIncreases++;
    };
  };
  return depthIncreases;
};
```

## Part Two

There's too much noise in the data, I'm going to need to refine it. Let's consider the sums of a three-measurement sliding window to reduce the measurements down. We will compare two windows where the first window is the current input summed with the next two. Compare this to the next input summed with the next two relative to that input.

### Second Solution

```js
  function calculateSlidingWindowIncreases(inputArray) {
    let slidingWindowIncreases = 0;
    // Can't trust faulty inputs since this mission is critical.
    if (Array.isArray(inputArray)) {

      // We are reducing the max value of i since this will get us to the last group.
      for (let i = 0; i < inputArray.length - 3; i++) {
        // The first group is this input (i) and the next two
        const sumFirstGroup = inputArray[i] + inputArray[i + 1] + inputArray[i + 2];

        // The second group is the next three inputs after i
        const sumSecondGroup = inputArray[i + 1] + inputArray[i + 2] + inputArray[i + 3];

        // Compare the groups to see if the sum of the next is greater than this one.
        if (sumSecondGroup > sumFirstGroup) slidingWindowIncreases++;
      };
    };
    return slidingWindowIncreases;
  };
```
