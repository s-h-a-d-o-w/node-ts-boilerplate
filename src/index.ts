import ky from "ky";

// Testing ESM-exclusive packages and top-level await support
const text = await ky.get("https://example.com").text();

console.log(text);
