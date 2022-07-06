import { useEffect } from "react";
import { getData } from "../../redux/homePage/action";
import { BasicUserCard } from "../BasicUserCard/BasicUserCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Box } from '@chakra-ui/react'

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
        <Box>
          HomePage
          <SearchBar />
          <BasicUserCard props={results} />
        </Box>
      ) : (
        "loading....."
      )}
    </>
  );
};
