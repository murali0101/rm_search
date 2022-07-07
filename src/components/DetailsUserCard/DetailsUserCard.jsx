import { Box, Heading, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "@chakra-ui/icons";
import { detailsUserCard } from "../../redux/homePage/action";
export const DetailsUserCard = ({ props }) => {
  const detailsUserCardTrack = useSelector(
    (state) => state.homePage.detailsUserCard
  );
  const dispatch = useDispatch();
  // console.log('detailsUserCard:', detailsUserCard)
  return (
    <>
      <Box
        w={"100%"}
        h={"100%"}
        bg="#88888a53"
        p={1}
        pos="fixed"
        zIndex={2}
        display={ detailsUserCardTrack ? "block" : "none"}
      >
        <Box
          w={400}
          h={100}
          bg="#FFFFFF"
          pos="absolute"
          top="45%"
          left="50%"
          transform={"translate(-50%,-50%)"}
          borderRadius={5}
        >
          <CloseIcon
            pos="absolute"
            top={3}
            right={3}
            color="#727887"
            fontSize={13}
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(detailsUserCard(false));
            }}
          />
        </Box>
      </Box>
    </>
  );
};
