import * as Identify from "./identify";
import * as Enums from "./enums"

/**
 * Get the signature of a section of a zip file
 * @param {Int8Array} signatureArray 64bit signature as an 8 size array of 1 byte ints.
 * @return {number} the 64 bit signature
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
    getSignature();
}