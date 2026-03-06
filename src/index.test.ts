import { foo } from "./index.js";
import { test, expect } from "vitest";

test(foo.name, () => {
  expect(foo()).toMatchInlineSnapshot(`5`);
});
