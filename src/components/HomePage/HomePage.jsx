import { useEffect } from "react";
import { getData, getPaginatedData } from "../../redux/homePage/action";
import { BasicUserCard } from "../BasicUserCard/BasicUserCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, VStack, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const DetailsUserCard = React.lazy(() =>
  import("../DetailsUserCard/DetailsUserCard")
);

export const HomePage = () => {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.homePage.results);
  const info = useSelector((state) => state.homePage.info);

  // console.log("results:", results);
  console.log("info:", info);
  useEffect(() => {
    dispatch(getData([null, 1]));
  }, []);

  const scrollToEnd = () => {
    dispatch(getPaginatedData(info.next));
  };

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <>
      {results.length != 0 ? (
        <>
          <Box w="100%" m={"auto"}>
            <Suspense fallback={<div></div>}>
              <DetailsUserCard />
            </Suspense>
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
        </>
      ) : (
        <Spinner
          pos="fixed"
          top="50%"
          left="50%"
          size="xl"
          transform={"translate(-50%,-50%)"}
        />
      )}
    </>
  );
};
