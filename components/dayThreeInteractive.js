import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
import { inputs } from '../inputs/dayThree';

export default function DayThree() {
  const sampleInput = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ]

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

  return (
    <Layout>
      <h1>Day Three Workbook</h1>
      <h2>Problem 1:</h2>
      <p>
        {`My findings ${calculatePowerConsumption(inputs)}`}
      </p>
      <h2>Problem 2:</h2>
      <p>
        {`My findings ${calculateLifeSupport(inputs)}`}
      </p>
    </Layout>
  );
}