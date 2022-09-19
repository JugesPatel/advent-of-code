---
title: 'Day One - Sonar Sweep'
date: '2022-09-18'
---

The elves have provided me with a submersible device equipped with a sonar system.
The report however is a little cryptic. Each line is a measurement of the depth of the sea floor.
I need to find out how quickly the depth increases. To do this, I will have to iterate through the inputs to see each increase.

## My Solution

```code
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
