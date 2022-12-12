import { Center, Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [screenValue, setScreenValue] = useState("0");
  const [operation, setOperation] = useState<string[]>([]);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = event.currentTarget.textContent;
    if (!value) return;
    // value?.match(/[0-9]/);
    if (value && !isNaN(+value)) {
      if (screenValue === "0") {
        setScreenValue((v) => value);
      } else {
        setScreenValue((v) => (v += value));
      }
    } else if (value === "AC") {
      setScreenValue("0");
      setOperation([]);
    } else {
      setOperation((op) => op.concat(value));
    }

    console.log("operations", operation);
    console.log("screenValue", screenValue);
  };
  return (
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
        </Box>
      </GridItem>
      <GridItem>
        <Center
          onClick={handleClick}
          boxSize="10"
          borderRadius="50"
          border="1px"
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
        >
          +
        </Center>
      </GridItem>
      <GridItem area={"zero"}>
        <Box onClick={handleClick} h="10" borderRadius="50" pl="1" border="1px">
          0
        </Box>
      </GridItem>
      <GridItem>
        <Center
          onClick={handleClick}
          boxSize="10"
          borderRadius="50"
          border="1px"
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
        >
          =
        </Center>
      </GridItem>
    </Grid>
  );
}

export default App;
