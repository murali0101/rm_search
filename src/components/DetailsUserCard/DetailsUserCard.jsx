import { Box, Avatar, Flex, Text, Divider } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { detailsUserCard } from "../../redux/homePage/action";

function DetailsUserCard() {
  const dispatch = useDispatch();

  const detailsUserCardTrack = useSelector(
    (state) => state.homePage.detailsUserCard
  );

  const detailsUserCardDataTrack = useSelector(
    (state) => state.homePage.detailsUserCardData
  );

  const { name, species, image, status, origin, gender, location } =
    detailsUserCardDataTrack;

  return (
    <>
      {detailsUserCardTrack ? (
        <>
          <Box
            w={"100%"}
            h={"100%"}
            bg="#88888a53"
            p={1}
            pos="fixed"
            zIndex={3}
            display={detailsUserCardTrack ? "block" : "none"}
          >
            <Box
              w={[350, 400]}
              bg="#FFFFFF"
              pos="absolute"
              top="50%"
              left="50%"
              transform={"translate(-50%,-50%)"}
              borderRadius={5}
            >
              <CloseIcon
                pos="absolute"
                top={3}
                right={3}
                color="#748772"
                fontSize={13}
                _hover={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(detailsUserCard([false, {}]));
                }}
              />
              <Box m={8}>
                <Flex alignItems={"center"}>
                  <Avatar size="xl" name="Christian Nwamba" src={image} />
                  <Box pl={6} alignSelf={"flex-start"}>
                    <Text fontSize={20} fontWeight={600} mt={2} mb={2}>
                      {name}
                    </Text>
                    <Box w="100%" display={"flex"} alignItems="center">
                      <Box
                        bg={status == "Alive" ? `#00DD74` : `#9EADC3`}
                        borderRadius={"5px"}
                        p={"5px"}
                      ></Box>
                      <Text fontSize={14} pl={2}>
                        {` ${status} - ${species}`}
                      </Text>
                    </Box>
                  </Box>
                </Flex>
                <Divider borderColor="#748772" mt={4} />
                <Box>
                  <Flex w="100%" alignItems={"center"} mt={5} mb={6} ml={3}>
                    <Box w="50%" alignSelf={"flex-start"}>
                      <Text color="#9EADC3" fontSize={14} fontWeight={600}>
                        Gender
                      </Text>
                      <Text fontSize={16} fontWeight={600}>
                        {gender}
                      </Text>
                    </Box>
                    <Box w="50%" alignSelf={"flex-start"}>
                      <Text color="#9EADC3" fontSize={14} fontWeight={600}>
                        Location
                      </Text>
                      <Text fontSize={16} fontWeight={600}>
                        {location?.name}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex w="100%" alignItems={"center"} ml={3}>
                    <Box w="50%" alignSelf={"flex-start"}>
                      <Text color="#9EADC3" fontSize={14} fontWeight={600}>
                        Species
                      </Text>
                      <Text fontSize={16} fontWeight={600}>
                        {species}
                      </Text>
                    </Box>

                    <Box w="50%" alignSelf={"flex-start"}>
                      <Text color="#9EADC3" fontSize={14} fontWeight={600}>
                        Origin
                      </Text>
                      <Text fontSize={16} fontWeight={600}>
                        {origin?.name}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : null}
    </>
  );
}

export default DetailsUserCard;
