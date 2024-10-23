import ky from "ky";

// Testing ESM-exclusive packages and top-level await support
const text = ky.get("https://example.com").text();
console.log(text);

function pause() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

export function foo() {
  // Should trigger error - typed eslint rules work
  pause();
  return 5;
}
