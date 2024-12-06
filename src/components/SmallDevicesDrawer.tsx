import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoMenu } from "react-icons/io5";
import GenreList from "./GenreList";
import PlatformList from "./PlatformList";

const SmallDevicesDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button onClick={onOpen} variant="outline">
        <IoMenu />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <GenreList />
            <PlatformList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SmallDevicesDrawer;
