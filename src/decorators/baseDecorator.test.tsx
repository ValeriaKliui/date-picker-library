import { render, screen } from '@testing-library/react';
import { ComponentType, FC } from 'react';
import Calendar from '../components/Calendar';
import BaseDecorator from './baseDecorator';

describe('base decorator', () => {
  const CalendarToMock = () => <div />;
  const decoratorToMock = (Wrapper: FC) => () => (
    <Wrapper>
      <CalendarToMock />
    </Wrapper>
  );

  const CalendarConfig = new BaseDecorator(CalendarToMock);

  const addDecoratorSpy = jest.spyOn(CalendarConfig, 'addDecorator');

  it('should create instance of base decorator', () => {
    expect(CalendarConfig.calendar).toEqual(CalendarToMock);
    expect(CalendarConfig).toBeInstanceOf(BaseDecorator);
  });
  it('should create instance of base decorator', () => {
    expect(
      CalendarConfig.addDecorator(decoratorToMock)
    ).toBeUndefined();

    expect(addDecoratorSpy).toHaveBeenCalledWith(decoratorToMock);
    expect(addDecoratorSpy).toHaveBeenCalledTimes(1);
  });
  it('should return wrapped component', () => {
    const CalendarConfig = new BaseDecorator(CalendarToMock);
    const DecoratedComponent = CalendarConfig.getDecorator();
    expect(DecoratedComponent).toBe(CalendarToMock);
  });
  it('should add decorations to passed component', () => {
    CalendarConfig.addDecorator(decoratorToMock);
    const DecoratedComponent = CalendarConfig.getDecorator();
    console.log(render(<DecoratedComponent />));
  });
});
