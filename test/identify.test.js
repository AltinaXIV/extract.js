import * as Enums from "../src/enums"
import * as Identify from "../src/identify"

test("correctly identifies an empty zip file as a zip file", () => {
    expect(Identify.identifyCompressionFormat("test.txt")).toBe(Enums.Format.UNKNOWN);
});

