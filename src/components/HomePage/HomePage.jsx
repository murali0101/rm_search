import { useEffect } from "react";
import { getData } from "../../redux/homePage/action";
import { BasicUserCard } from "../BasicUserCard/BasicUserCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, VStack } from "@chakra-ui/react";

export const HomePage = () => {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.homePage.results);
  const info = useSelector((state) => state.homePage.info);
  console.log("results:", results);
  console.log("info:", info);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      {results ? (
        <Box maxW={550} m={"auto"} mt={20}>
          <Heading
            as="h6"
            fontSize={47}
            letterSpacing={1.5}
            textAlign="center"
            bg="blue.400"
          >
            Rick and Morty Search
          </Heading>
          <br />
          <br />
          <SearchBar />
          <VStack maxW={450} bg="blackAlpha.300" m={"auto"}  mt={5} textAlign="left">
            {results.map((ele, ind) => <BasicUserCard props={ ele} key={ ind} />)}
          </VStack>
        </Box>
      ) : (
        "loading....."
      )}
    </>
  );
};
