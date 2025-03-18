import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toBeVisible(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveClass(className: string): R;
      toBe(expected: any): R;
      toEqual(expected: any): R;
      toStrictEqual(expected: any): R;
      toBeNull(): R;
      toBeUndefined(): R;
      toBeDefined(): R;
      toBeTruthy(): R;
      toBeFalsy(): R;
      toContain(item: any): R;
      toBeCalledWith(...args: any[]): R;
      toHaveBeenCalledTimes(count: number): R;
      toMatchSnapshot(): R;
    }
  }
} 