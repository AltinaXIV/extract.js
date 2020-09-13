import * as Extract from '../src/extract'

test("ensures that Int8arrays are turned into integers correctly", () => {
    let arr = Uint8Array.of(0x2f, 0xa1);
    let expected = 0x2fa1;
    expect(Extract.convertArrayIntoInt(arr)).toBe(expected);
});