import { Box, HStack, Avatar ,Text } from "@chakra-ui/react";
export const BasicUserCard = ({ props }) => {
  console.log(props);
  const { name, species, image, status } = props;
  return (
    <>
      <Box bg="#FFFFFF" display={"flex"} maxW={450}>
        <Avatar name="Dan Abrahmov" src={image} />
        <Text>{name}</Text>
      </Box>
    </>
  );
};
