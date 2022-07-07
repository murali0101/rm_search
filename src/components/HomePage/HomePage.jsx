import { useEffect } from "react";
import { getData } from "../../redux/homePage/action";
import { BasicUserCard } from "../BasicUserCard/BasicUserCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";

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
        <Box maxW={550} m={"auto"} mt={20} textAlign="center" >
          <Heading as="h6" fontSize={47} letterSpacing={1.5}>
            Rick and Morty Search
          </Heading>
          <br />
          <br />
          <SearchBar />
          <BasicUserCard props={results} />
        </Box>
      ) : (
        "loading....."
      )}
    </>
  );
};
