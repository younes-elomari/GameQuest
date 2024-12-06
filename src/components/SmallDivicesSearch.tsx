import SearchInput from "./SearchInput";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SmallDivicesSearch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size="md" variant="outline" onClick={onOpen}>
        <BsSearch />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Game</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingY={5}>
            <SearchInput />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SmallDivicesSearch;
