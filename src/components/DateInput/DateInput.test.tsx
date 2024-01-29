import { fireEvent, render } from "@testing-library/react";
import { ThemeWrapper } from "providers/ThemeWrapper";
import DateInput from "./DateInput";

describe("date input", () => {
  test("should call onChange func typing in input", () => {
    const onDateChange = jest.fn();
    const { getByTestId } = render(
      <ThemeWrapper>
        <DateInput onDateChange={onDateChange} />
      </ThemeWrapper>
    );
    const dateInput = getByTestId("date-input");
    fireEvent.change(dateInput, {
      target: { value: "01/01/2023" },
    });
    expect(onDateChange).toHaveBeenCalled();
  });

  test("should clear input and call onClear func after clicking on Clear", () => {
    const onClearClick = jest.fn();
    const { getByTestId } = render(
      <ThemeWrapper>
        <DateInput onClearClick={onClearClick} />
      </ThemeWrapper>
    );

    const clearButton = getByTestId("click-button");
    const dateInput = getByTestId("date-input") as HTMLInputElement;

    fireEvent.click(clearButton);
    expect(onClearClick).toHaveBeenCalled();
    expect(dateInput.value).toEqual("");
  });

  test("should show error message if data was incorrect", () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <DateInput />
      </ThemeWrapper>
    );
    const dateInput = getByTestId("date-input");
    const wrongDates = ["wrongdate", "99/99/2002", "30/02/2023"];
    wrongDates.forEach((dateString) => {
      fireEvent.change(dateInput, {
        target: { value: dateString },
      });
      const error = getByTestId("date-error");
      expect(error).toBeInTheDocument();
    });
  });
});
