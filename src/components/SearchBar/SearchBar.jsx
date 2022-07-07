import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const SearchBar = () => {
  return (
    <>
      <InputGroup bg="#FFFFFF" maxW={450}  m={"auto"} >
        <InputLeftElement h={55}
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
          zIndex={1}
        />
        <Input type="tel" placeholder="Search for a contact" border={0} borderRadius={0} h={55} _placeholder={{color:"gray.300"}} />
      </InputGroup>
    </>
  );
};
