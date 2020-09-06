import * as Enums from './enums'

/**
 * Identify the format of a given file
 * @param {String} file - location of file to identify format of
 * @returns {number} the format of the file provided
 */
export function identifyCompressionFormat(file) {
    return Enums.Format.UNKNOWN;
}