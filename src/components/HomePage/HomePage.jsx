import { useEffect } from "react";
import { getData } from "../../redux/homePage/action";
import { BasicUserCard } from "../BasicUserCard/BasicUserCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { DetailsUserCard } from "../DetailsUserCard/DetailsUserCard";

export const HomePage = () => {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.homePage.results);
  const info = useSelector((state) => state.homePage.info);

  // console.log("results:", results);
  console.log("info:", info);
  useEffect(() => {
    dispatch(getData([null,1]));
  }, []);
  return (
    <>
      {results ? (
        <Box w="100%" m={"auto"}>
          <DetailsUserCard />
          <Heading
            as="h6"
            fontSize={47}
            letterSpacing={1.5}
            textAlign="center"
            pt={20}
          >
            Rick and Morty Search
          </Heading>
          <br />
          <br />
          <SearchBar />
          <Box maxW={450} m={"auto"} mt={5} textAlign="left">
            {results.map((ele, ind) => (
              <BasicUserCard props={ele} key={ind} />
            ))}
          </Box>
        </Box>
      ) : (
        "loading....."
      )}
    </>
  );
};
