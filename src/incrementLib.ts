const wait = (ms: number = 1000) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const increment = async (num: number) => {
  await wait();
  return num + 1;
};
export const decrement = async (num: number) => {
  await wait();
  return num - 1;
};

export const returnValue = async (str: string) => {
  await wait();
  return `return ${str}`;
};
