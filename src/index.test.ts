import { foo } from "./index.js";

test(foo.name, () => {
  expect(foo()).toMatchInlineSnapshot(`5`);
});
