import { type FC } from "react";
import BaseDecorator from "decorators/baseDecorator";

describe("base decorator", () => {
  const CalendarToMock = (): JSX.Element => <div />;
  const decoratorToMock =
    (Wrapper: FC<{ children: React.ReactNode }>) => () => (
      <Wrapper>
        <CalendarToMock />
      </Wrapper>
    );

  const CalendarConfig = new BaseDecorator(CalendarToMock);

  const addDecoratorSpy = jest.spyOn(CalendarConfig, "addDecorator");

  it("should create instance of base decorator", () => {
    expect(CalendarConfig.calendar).toEqual(CalendarToMock);
    expect(CalendarConfig).toBeInstanceOf(BaseDecorator);
  });
  it("should call addDecorator with decorator", () => {
    CalendarConfig.addDecorator(decoratorToMock);

    expect(addDecoratorSpy).toHaveBeenCalledWith(decoratorToMock);
    expect(addDecoratorSpy).toHaveBeenCalledTimes(1);
  });
  it("should return wrapped component", () => {
    const NewCalendarConfig = new BaseDecorator(CalendarToMock);
    const DecoratedComponent = NewCalendarConfig.getDecorator();
    expect(DecoratedComponent).toBe(CalendarToMock);
  });
});
