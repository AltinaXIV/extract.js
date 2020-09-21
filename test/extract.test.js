let Extract = require("../src/extract");


test("ensures that Int8arrays are turned into integers correctly (test 1)", () => {
    let arr = Uint8Array.of(0x2f, 0xa1);
    let expected = 0x2fa1;
    expect(Extract.convertArrayIntoInt(arr)).toBe(expected);
});

test("ensures that Int8arrays are turned into integers correctly (test 2)", () => {
    let arr = Uint8Array.of(0x04, 0x03, 0x4b, 0x50);
    let expected = 0x04034b50;
    expect(Extract.convertArrayIntoInt(arr)).toBe(expected);
});

test("ensures that readSignatures correctly returns a good signature", () => {
    let spy = jest.spyOn(Extract, 'convertArrayIntoInt').mockReturnValueOnce(0x04034b50);
    let arr = Uint8Array.of(0x04, 0x03, 0x4b, 0x50);
    let expected = 0x04034b50;
    expect(Extract.getSignature(arr, 0)).toBe(expected);
});

test("ensures Enums.Signatures.BAD_SIGNATURE is thrown when a bad signature is provided", () => {
    let spy = jest.spyOn(Extract, 'convertArrayIntoInt').mockReturnValueOnce(0x12344567);
    let arr = Uint8Array.of(0x12, 0x34, 0x45, 0x67);
    let expected = 0;
    expect(Extract.getSignature(arr, 0)).toBe(expected);
});