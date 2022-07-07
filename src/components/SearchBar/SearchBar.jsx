import {
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/homePage/action";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const toast = useToast();

  const handleChange = MyDebouncing((e) => {
    // console.log(e.target.value);
    dispatch(getData([e.target.value, 1, toast]));
  }, 2 * 1000);

  return (
    <>
      <InputGroup bg="#FFFFFF" maxW={450} m={"auto"}>
        <InputLeftElement
          h={55}
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
          zIndex={2}
        />
        <Input
          type="text"
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

function MyDebouncing(cb, delay) {
  let interval = null;
  return function (...args) {
    if (interval) {
      clearTimeout(interval);
    }
    interval = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
