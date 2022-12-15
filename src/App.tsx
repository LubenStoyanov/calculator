import { Center, Box, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  const [screenValue, setScreenValue] = useState<null | string>("0");
  const [operation, setOperation] = useState<null | string>(null);
  const [number, setNumber] = useState<null | string>(null);
  const [result, setResult] = useState<null | string>("0");
  const [showResult, setShowResult] = useState(true);
  const [isFirstDigit, setIsFirstDigit] = useState(true);
  const [isSecondNumber, setIsSecondNumber] = useState(false);

  const resetCalculator = () => {
    setResult("0");
    setNumber(null);
    setOperation(null);
    setIsFirstDigit(true);
    setIsSecondNumber(false);
  };

  const calculateResult = (
    result: string | null,
    operation: string | null,
    number: string | null
  ) => {
    switch (operation) {
      case "+":
        return (Number(result) + Number(number)).toString();
      case "-":
        return (Number(result) - Number(number)).toString();
      case "x":
        return (Number(result) * Number(number)).toString();
      case "/":
        return (Number(result) / Number(number)).toString();
      default:
        return "";
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    const value = event.currentTarget.textContent;
    if (!value) return;

    if (!isNaN(+value)) {
      if (isFirstDigit && !isSecondNumber) {
        console.log("test");
        setResult(value);
        setIsFirstDigit(false);
      } else if (!isFirstDigit && !isSecondNumber) {
        setResult((v) => (v += value));
      } else if (isFirstDigit && isSecondNumber) {
        setIsFirstDigit(false);
        setNumber(value);
      } else if (!isFirstDigit && isSecondNumber) {
        setNumber((v) => (v += value));
      }
    } else if (value === "AC") {
      resetCalculator();
    } else {
      setShowResult((sr) => !sr);
      if (value === "=" && operation) {
        setResult(calculateResult(result, operation, number));
        setNumber(null);
      }
      setIsSecondNumber(true);
      setOperation(value);
      setIsFirstDigit(true);

      if (number) {
        console.log("calc");
        setResult(calculateResult(result, operation, number));
        // setIsSecondNumber(false);
      }
    }
  };

  useEffect(() => {
    // setScreenValue(isSecondNumber ? number : result);
    setScreenValue(showResult ? result : number);
    console.log("useEffect", result, number, operation, isSecondNumber);
  }, [result, number, operation]);

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
            {screenValue}
            {/* {isSecondNumber ? number : result} */}
          </Box>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            AC
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="plusminus"
            bg={"red"}
          >
            +/-
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="percentage"
            bg={"red"}
          >
            %
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            /
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="7"
          >
            7
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="8"
          >
            8
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id=""
          >
            9
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            x
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            4
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            5
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            6
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="minus"
          >
            -
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            1
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            2
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
          >
            3
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="plus"
          >
            +
          </Center>
        </GridItem>
        <GridItem area={"zero"}>
          <Box
            onClick={handleClick}
            h="10"
            borderRadius="50"
            pl="1"
            border="1px"
            id="AC"
          >
            0
          </Box>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="AC"
            bg={"red"}
          >
            ,
          </Center>
        </GridItem>
        <GridItem>
          <Center
            onClick={handleClick}
            boxSize="10"
            borderRadius="50"
            border="1px"
            id="equal"
          >
            =
          </Center>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
