import * as Identify from "./identify";
import * as Enums from "./enums"

/**
 * Main function
 * @param {String} file The location of the file in which to do some action on
 * @param {number} action the action to preform on the file
 */
function process(file, action) {
    // Only identify the file format if we are listing files OR extracting files
    if(action === Enums.Action.LIST || action === Enums.Action.EXTRACT) {
        const format = Identify.identifyCompressionFormat(file)
    }
}