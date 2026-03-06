try {
  const res = await fetch("https://www.reuters.com");
  console.log(await res.text());
} catch (error) {
  console.error(error);
}

function pause() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

export function foo() {
  // Should trigger error - typed eslint rules work
  // oxlint-disable-next-line typescript/no-floating-promises
  pause();
  return 5;
}
