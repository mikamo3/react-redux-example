import { renderHook, act } from "@testing-library/react-hooks";
import { useState, useCallback, useEffect } from "react";

function useHooks() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(x => x + 1), []);
  useEffect(() => {
    increment();
    console.log(count);
  }, []);
  return { count, increment };
}

it("", () => {
  const hook = renderHook(() => useHooks());
  console.log(hook.result.current);
  act(() => {
    hook.result.current.increment();
  });
  console.log(hook.result.current);
  act(() => {});
});

test("should clean up side effect", () => {
  const { rerender } = renderHook(
    ({ id }) => {
      useEffect(() => {
        console.log(id);
        return () => {
          console.log(id); // this id will get the old value when the effect is cleaned up
        };
      }, [id]);
    },
    {
      initialProps: { id: "first" }
    }
  );

  rerender({ id: "second" });
});
