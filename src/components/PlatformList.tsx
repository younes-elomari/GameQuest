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

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformList = ({ selectedPlatform, onSelectPlatform }: Props) => {
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
      <Heading fontSize="2xl" marginBottom={3}>
        Platforms
      </Heading>

      <List>
        {platforms.map((platform) => (
          <ListItem key={platform.id} paddingY="3px">
            <HStack>
              <Icon
                alignSelf="center"
                justifySelf="center"
                as={iconMap[platform.slug]}
                color="gray.900"
                boxSize="30px"
              />
              <Button
                fontWeight={
                  platform.id === selectedPlatform?.id ? "bold" : "medium"
                }
                onClick={() => onSelectPlatform(platform)}
                variant="link"
                fontSize="md"
                whiteSpace="normal"
                textAlign="left"
              >
                {platform.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
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
      </List>
    </Box>
  );
};

export default PlatformList;
