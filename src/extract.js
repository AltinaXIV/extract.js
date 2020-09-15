import * as Identify from "./identify";
import * as Enums from "./enums"
import {Signatures} from "./enums";

const BYTE_SIZE = 8;

/**
 * Turns an Int8Array into an integer. This is done by pretending the array is one integer. In other words,
 * It would be able change [0x2f, 0xa7] into 0x2fa7
 * @param {Uint8Array} a The array to convert into the single integer
 * @return {number} the new single integer
 */
export function convertArrayIntoInt(a) {
    let v = a[0];
    for(let i = 1; i < a.length; i++) {
        v = (v << BYTE_SIZE) | a[i];
    }
    return v;
}

/**
 * Get the signature of a section of a zip file
 * @param {Uint8Array} fileContents The zipped file contents
 * @param {number} position The position in the file where the signature is.
 * @return {number} the 32 bit signature
 */
export function getSignature(fileContents, position) {
    let inputSig_u = fileContents.slice(position, position + 4);
    let inputSig_n = convertArrayIntoInt(inputSig_u);
    let ret = Enums.Signatures.BAD_SIGNATURE
    Object.values(Enums.Signatures).filter(s => {
        if(s === inputSig_n) {
            ret = s;
        }
    })
    return ret;
}

/**
 * Main function
 * @param {ArrayBuffer} file The location of the file in which to do some action on
 * @param {number} action the action to preform on the file
 */
function process(file, action) {
    const fileContents = new Uint8Array(file);
    let position = 0;
    getSignature(fileContents, position);
}