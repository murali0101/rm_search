import React, { Suspense } from "react";
import { Box, Heading, Spinner, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { getData, getPaginatedData } from "../../redux/homePage/action";
import { SearchBar } from "../SearchBar/SearchBar";
import { BasicUserCard } from "../BasicUserCard/BasicUserCard";

const DetailsUserCard = React.lazy(() =>
  import("../DetailsUserCard/DetailsUserCard")
);

export const HomePage = () => {
  const dispatch = useDispatch();

  const toast = useToast();

  useEffect(() => {
    dispatch(getData([null, 1]));
  }, []);

  const results = useSelector((state) => state.homePage.results);
  const info = useSelector((state) => state.homePage.info);

  // console.log("results:", results);
  // console.log("info:", info);

  function scrollToEnd(info, toast) {
    dispatch(getPaginatedData(info, toast));
  }

  const ref = useRef(MyThrottling(scrollToEnd, 2 * 1000));

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      ref.current(info.next, toast);
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
              fontSize={{ base: 30, md: 47 , lg: 47 }}
              
              textAlign="center"
              pt={20}
              fontFamily={"Arial, Helvetica, sans-serif"}
            >
              Rick and Morty Search
            </Heading>

            <br />
            <br />
            <SearchBar />
            <Box w={[350, 450]} m={"auto"} mt={5} textAlign="left">
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

function MyThrottling(cb, delay) {
  let interval = true;
  return function (...args) {
    if (interval) {
      interval = false;
      cb(...args);
      setTimeout(() => {
        interval = true;
      }, delay);
    }
  };
}
