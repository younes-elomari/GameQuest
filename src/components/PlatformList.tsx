import usePlatforms from "../hooks/usePlatforms";
import {
  Heading,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import useGameQueryStore from "../store";
import SectionHeadingMotion from "./motions/SectionHeadingMotion";
import ImageIconMotion from "./motions/ImageIconMotion";
import ButtonMotion from "./motions/ButtonMotion";

const PlatformList = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  if (isLoading) return <Spinner />;

  let platforms =  data.slice(0, 5);

  return (
    <Box>
      <SectionHeadingMotion>
        <Heading fontSize="2xl" marginBottom={3}>
          Platforms
        </Heading>
      </SectionHeadingMotion>

      <List>
        {platforms.map((platform) => (
          <ListItem key={platform.id} paddingY="3px">
            <HStack>
              <ImageIconMotion>
                <Icon
                  alignSelf="center"
                  justifySelf="center"
                  as={iconMap[platform.slug]}
                  color="gray.200"
                  boxSize="30px"                  
                />
              </ImageIconMotion>
              <ButtonMotion>
                <Button
                  fontWeight={
                    platform.id === selectedPlatformId ? "bold" : "medium"
                  }
                  onClick={() => setSelectedPlatformId(platform.id)}
                  variant="link"
                  fontSize="md"
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {platform.name}
                </Button>
              </ButtonMotion>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PlatformList;
