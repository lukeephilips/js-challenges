/* Given a run-length-encoded string, e.g. A11U7C1G2, write a
function to return the original, uncompressed string, e.g.
AAAAAAAAAAAUUUUUUUCGG. Write a function to do the encoding too.
*/

let encoded = 'A11U7C1G2';
runLength = (str) => {
  let arr = str.split(/(\d+)/);
  let outputString = '';

  for (let i = 0; i < arr.length; i += 2) {
    for (let j = 0; j < arr[i + 1]; j++) {
      outputString += arr[i];
    }
  }

  return outputString;
};

let decoded = 'AAAAAAAAAAAUUUUUUUCGG';
encodeRun = (str) => {
  let letterArr = str.match(/([A-Z])\1*/g);
  let countArr = letterArr.map((char) => char[0] + char.length);

  return countArr.join('');
};

encodeRun(decoded) === encoded;
runLength(encoded) === decoded;
