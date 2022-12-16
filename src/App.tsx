import { calculateResult } from "./calculate";
import buttons from "./buttons";
import { Center, Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import "./calc.css";

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

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = event.currentTarget.textContent;
    if (!value) return;
    console.log(value);

    setLastUserInput(!isNaN(+value) ? "number" : "operation");
    setShowDelete(true);

    // if (value === "C") {
    //   if (lastUserInput === "number" && !isSecondNumber) {
    //     return setResult(null);
    //   }
    //   if (lastUserInput === "number" && isSecondNumber) {
    //     return setNumber("0");
    //   }
    // }
    if (value === "AC") {
      resetCalculator();
    } else if (!isNaN(+value)) {
      if (!isSecondNumber) {
        isFirstDigit ? setResult(value) : setResult((v) => (v += value));
        setIsFirstDigit(false);
      } else {
        isFirstDigit ? setNumber(value) : setNumber((v) => (v += value));
        setIsFirstDigit(false);
      }
    } else {
      if (value === "+/-") {
        if (!isSecondNumber)
          return setResult(calculateResult(result, "x", "-1"));
        return setNumber(calculateResult(number, "x", "-1"));
      }
      if (value === "=" && !number) return;

      if (number) setShowResult((sr) => !sr);

      if (value === "=" && operation) {
        setResult(calculateResult(result, operation, number));
        setShowResult(true);
        setNumber(null);
      }

      setOperation(value);

      if (number) {
        setShowResult(true);
        setResult(calculateResult(result, operation, number));
        setNumber(null);
      }

      setIsFirstDigit(true);
      setIsSecondNumber(true);
    }
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
            {showResult ? result : number}
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
              {showDelete && button.label === "AC" ? "C" : button.value}
              {/* {button.value} */}
            </Center>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default App;
