const calculate = (
  number1: number,
  number2: number,
  operater: string | null
) => {
  switch (operater) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "x":
      return number1 * number2;
    case "÷":
      return number1 / number2;
    default:
      return 0;
  }
};

export const calculateResult = (
  result: string | null,
  operation: string | null,
  number: string | null
) => {
  const num1 = Number(result);
  const num2 = Number(number);

  return calculate(num1, num2, operation).toString();
};
