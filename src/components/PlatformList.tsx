import { useState } from "react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import {
  Heading,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
  Icon,
  ButtonGroup,
  IconButton,
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
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
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

  const [show, setShow] = useState(false);

  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  if (isLoading) return <Spinner />;

  let platforms = show ? data.slice(0, 3) : data.slice(0, 7);

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
                  color="gray.900"
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
        <SectionHeadingMotion>
          <ListItem paddingY="5px">
            <ButtonGroup
              onClick={() => setShow(!show)}
              size="sm"
              isAttached
              variant="outline"
            >
              <IconButton
                aria-label="Add to friends"
                icon={show ? <BsChevronDown /> : <BsChevronUp />}
              />
              <Button>{show ? "Show" : "Hide"}</Button>
            </ButtonGroup>
          </ListItem>
        </SectionHeadingMotion>
      </List>
    </Box>
  );
};

export default PlatformList;
