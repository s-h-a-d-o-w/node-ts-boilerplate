import { foo } from "./index.js";
import { describe, expect, it } from "vitest";

describe(foo, () => {
  it("works", () => {
    expect(foo()).toMatchInlineSnapshot(`5`);
  });
});
