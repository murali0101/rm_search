import { Box, HStack, Avatar, Text, Spacer, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUserCard } from "../../redux/homePage/action";
export const BasicUserCard = ({ props }) => {
  console.log(props);
  const { name, species, image, status } = props;
  const dispatch = useDispatch();
  return (
    <>
      <Flex
        bg="#FFFFFF"
        mb={1}
        p={5}
        alignItems="center"
        onClick={() => {
          dispatch(detailsUserCard(true));
        }}
        _hover={{ cursor: "pointer" }}
      >
        <Box display={"flex"} w="100%" alignItems="center">
          <Avatar name="Dan Abrahmov" src={image} size="xs" />
          <Text fontSize="sm" fontWeight={700} color="#333" pl={3}>
            {name}
          </Text>
        </Box>
        <Spacer />

        <Box w="100%" display={"flex"} alignItems="center">
          <Box
            bg={status == "Alive" ? `#00DD74` : `#9EADC3`}
            borderRadius={5}
            p={1}
          ></Box>
          <Text fontSize={12} fontWeight={600} pl={2}>
            {` ${status} - ${species}`}
          </Text>
        </Box>
      </Flex>
    </>
  );
};
