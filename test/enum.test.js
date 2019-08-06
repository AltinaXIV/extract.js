import * as Enums from "../src/enums"

// Test all values of format
test("Ensure value 0 of Enums.Format is UNKNOWN", () => {
   expect(Enums.Format.UNKNOWN).toBe(0);
});

test("Ensure value 1 of Enums.Format is ZIP", () => {
   expect(Enums.Format.ZIP).toBe(1);
});

// Test all values of format
test("Ensure value 0 of Enums.Action is LIST", () => {
   expect(Enums.Action.LIST).toBe(0);
});

test("Ensure value 1 of Enums.Format is EXTRACT", () => {
   expect(Enums.Action.EXTRACT).toBe(1);
});