import * as Extract from '../src/extract'
import * as jest from "m";

//const mockConvertArrayIntoInt = jest.fn(x => 0x04034b50);

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
    let arr = Uint8Array.of(0x04, 0x03, 0x4b, 0x50);
    let expected = 0x04034b50;
    expect(Extract.getSignature(arr, 0)).toBe(expected);
});

test("ensures Enums.Signaturs.BAD_SIGNATURE is thrown when a bad signature is provided", () => {
    let arr = Uint8Array.of(0x12, 0x34, 0x45, 0x67);
    let expected = 0;
    expected(Extract.getSignature(arr, 0)).toBe(expected);
});