try {
  const res = await fetch("https://example.com");
  console.log(await res.text());
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
