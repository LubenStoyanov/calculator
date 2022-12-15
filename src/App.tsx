// Screen is still buggy after several calculations
import { Center, Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import "./calc.css";

const buttons = [
  { value: "AC", label: "AC" },
  { value: "+/-", label: "plusminus" },
  { value: "%", label: "precentage" },
  { value: "÷", label: "/" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "x", label: "x" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "-", label: "-" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "+", label: "+" },
  { value: "0", label: "0" },
  { value: ".", label: "," },
  { value: "=", label: "=" },
];

function App() {
  const [screenValue, setScreenValue] = useState<null | string>("0");
  const [operation, setOperation] = useState<null | string>(null);
  const [number, setNumber] = useState<null | string>(null);
  const [result, setResult] = useState<null | string>("0");
  const [showResult, setShowResult] = useState(true);
  const [isFirstDigit, setIsFirstDigit] = useState(true);
  const [isSecondNumber, setIsSecondNumber] = useState(false);
  const [lastUserInput, setLastUserInput] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const resetCalculator = () => {
    setResult("0");
    setNumber(null);
    setOperation(null);
    setShowResult(true);
    setIsFirstDigit(true);
    setIsSecondNumber(false);
    setShowDelete(false);
  };

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

  const calculateResult = (
    result: string | null,
    operation: string | null,
    number: string | null
  ) => {
    const num1 = Number(result);
    const num2 = Number(number);

    return calculate(num1, num2, operation).toString();
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = event.currentTarget.textContent;
    if (!value) return;

    setLastUserInput(!isNaN(+value) ? "number" : "operation");
    setShowDelete(true);

    if (value === "C") {
      if (!isNaN(+value)) {
      }
    }
    if (!isNaN(+value)) {
      if (!isSecondNumber) {
        isFirstDigit ? setResult(value) : setResult((v) => (v += value));
        setIsFirstDigit(false);
      } else {
        isFirstDigit ? setNumber(value) : setNumber((v) => (v += value));
        setIsFirstDigit(false);
      }
    } else if (value === "AC") {
      resetCalculator();
    } else {
      if (value === "=" && !number) return;

      setShowResult((sr) => !sr);

      if (value === "=" && operation) {
        setResult(calculateResult(result, operation, number));
        setShowResult(true);
        setNumber(null);
      }

      setOperation(value);

      if (number) {
        setShowResult(true);
        setResult(calculateResult(result, operation, number));
      }

      setIsFirstDigit(true);
      setIsSecondNumber(true);
    }

    setScreenValue(showResult ? result : number);
  };

  return (
    <>
      <Grid
        templateAreas={`"screen screen screen screen"
                      "ac plusminus precentage divide"
                      "seven eight nine multiply"
                      "four five six minus"
                      "one two three plus"
                      "zero zero comma equal"`}
        gap="1"
        m="3rem"
        fontSize="1.5rem"
        justifyContent="center"
      >
        <GridItem area={"screen"}>
          <Box h="10" borderRadius="50" pr="1" border="1px" textAlign={"right"}>
            {/* {showResult ? result : number} */}
            {screenValue}
          </Box>
        </GridItem>
        {buttons.map((button) => (
          <GridItem
            key={button.label}
            area={button.label === "0" ? "zero" : ""}
            onClick={handleClick}
          >
            <Center
              boxSize="20"
              borderRadius="50"
              border="1px"
              fontWeight="bold"
              cursor="pointer"
            >
              {/* {showDelete && button.label === "AC" ? "C" : button.value} */}
              {button.value}
            </Center>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default App;
