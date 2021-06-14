import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "./useForm";

const setup = (params) => renderHook(() => useForm(params));

test("should change keyword", () => {
  const { result } = setup();
  act(() => {
    result.current.updateKeyword("batman");
  });
  expect(result.current.keyword).toBe("batman");
});

test("should use initial values", () => {
  const { result } = setup({ inicialKeyword: "bulma" });
  expect(result.current.keyword).toBe("bulma");
});

test("should update correctly times when used twice", () => {
  const { result } = setup({ inicialKeyword: "bulma" });
  act(() => {
    result.current.updateKeyword("b");
    result.current.updateKeyword("bat");
  });
  expect(result.current.keyword).toBe("bat");
  expect(result.current.times).toBe(2);
});

test("initial language change correctly", () => {
  const { result } = setup({ inicialLanguage: "en" });
  expect(result.current.language).toBe("en");
});

test("should change language ", () => {
  const { result } = setup();
  act(() => {
    result.current.updateLanguage("en");
  });
  expect(result.current.language).toBe("en");
  expect(result.current.times).toBe(1);
});

test("to click in reset button should will change value imputs", async () => {
  const { result } = setup();

  act(() => {
    result.current.reset();
  });

  expect(result.current.keyword).toBe("");
  expect(result.current.rating).toBe("g");
  expect(result.current.language).toBe("es");
  expect(result.current.times).toBe(0);
});
