import { fireEvent, render } from "@testing-library/react";
import { ThemeWrapper } from "providers/ThemeWrapper";
import DateInput from "./DateInput";

describe("date input", () => {
  test("should change input value after typing in input", () => {
    const setInputValue = jest.fn();
    const value = "01.01.2023";
    const { getByTestId } = render(
      <ThemeWrapper>
        <DateInput value={value} setInputValue={setInputValue} />
      </ThemeWrapper>
    );
    const dateInput = getByTestId("date-input");
    fireEvent.change(dateInput, {
      target: { value },
    });

    expect(dateInput).toHaveValue(value);
  });

  test("should clear input and call onClear func after clicking on Clear", () => {
    const onClearClick = jest.fn();
    const setInputValue = jest.fn();
    const { getByTestId } = render(
      <ThemeWrapper>
        <DateInput
          onClearClick={onClearClick}
          value=""
          setInputValue={setInputValue}
        />
      </ThemeWrapper>
    );

    const clearButton = getByTestId("click-button");
    const dateInput = getByTestId("date-input") as HTMLInputElement;

    fireEvent.click(clearButton);
    expect(onClearClick).toHaveBeenCalled();
    expect(dateInput.value).toEqual("");
  });

  test("should show error message if data was incorrect", () => {
    const setInputValue = jest.fn();
    const value = "99/99/20k02";

    const { getByTestId } = render(
      <ThemeWrapper>
        <DateInput setInputValue={setInputValue} value="" />
      </ThemeWrapper>
    );
    const dateInput = getByTestId("date-input");
    fireEvent.change(dateInput, {
      target: { value },
    });
    const error = getByTestId("date-error");
    expect(error).toBeInTheDocument();
  });
});
