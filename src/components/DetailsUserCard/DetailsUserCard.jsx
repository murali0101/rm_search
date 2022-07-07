import { Box, Heading, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
const detailsUserCard = useSelector((state) => state.homePage.detailsUserCard);
console.log('detailsUserCard:', detailsUserCard)

export const DetailsUserCard = ({ props }) => {
  return (
    <>
      <Box w={"100%"} h={"100%"} bg="#88888a53" p={1} pos="fixed" zIndex={2} display={false?"block":"none"}>
        <Box
          w={400}
          h={100}
          bg="#FFFFFF"
          pos="absolute"
          top="45%"
          left="50%"
          transform={"translate(-50%,-50%)"}
        ></Box>
      </Box>
    </>
  );
};
