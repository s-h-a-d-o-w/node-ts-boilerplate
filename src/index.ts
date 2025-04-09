import ky from "ky";

// Testing ESM-exclusive packages and top-level await support
try {
  const text = await ky.get("https://example.com").text();
  console.log(text);
} catch (_) {
  /* empty */
}

function pause() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

export function foo() {
  // Should trigger error - typed eslint rules work
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  pause();
  return 5;
}
