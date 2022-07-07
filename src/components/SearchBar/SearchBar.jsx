import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/homePage/action";

export const SearchBar = () => {
  const dispatch = useDispatch();
  // const [data , setData]=useState()
  // useEffect(() => {}, []);
  const handleChange = MyDebounce((e) => {
    console.log(e.target.value);
    dispatch(getData([e.target.value]))
  }, 2*1000);

  return (
    <>
      <InputGroup bg="#FFFFFF" maxW={450} m={"auto"}>
        <InputLeftElement
          h={55}
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
          zIndex={1}
        />
        <Input
          type="tel"
          placeholder="Search for a contact"
          border={0}
          borderRadius={0}
          h={55}
          _placeholder={{ color: "gray.300" }}
          onChange={handleChange}
        />
      </InputGroup>
    </>
  );
};

function MyDebounce(cb, delay) {
  let interval = null;
  return function (...args) {
    if (interval) {
      clearTimeout(interval);
    }
    interval = setTimeout(() => {
      cb(...args)
    }, delay);
  };
}
