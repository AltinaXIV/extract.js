import * as Identify from "./identify";
import * as Enums from "./enums"

const BYTE_SIZE = 8;

/**
 * Turns an Int8Array into an integer. This is done by pretending the array is one integer. In other words,
 * It would be able change [0x2f, 0xa7] into 0x2fa7
 * @param {Int8Array} a The array to convert into the single integer
 * @return {number} the new single integer
 */
export function convertArrayIntoInt(a) {
    let v = a[0];
    for(let i = 1; i < a.length; i++) {
        v = (v << BYTE_SIZE) | a[1];
    }
    return v;
}

/**
 * Get the signature of a section of a zip file
 * @param {Int8Array} signatureArray 32bit signature as an 4 size array of 1 byte ints.
 * @return {number} the 32 bit signature
 */
function getSignature(signatureArray) {
}

/**
 * Main function
 * @param {ArrayBuffer} file The location of the file in which to do some action on
 * @param {number} action the action to preform on the file
 */
function process(file, action) {
    const fileContents = new Int8Array(file);
    let position = 0;
    getSignature(fileContents.slice(0, 4));
}