import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avarage rating" },
  ];

  return (
    <Menu>
      <MenuButton size="sm" as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevence
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem fontWeight="medium" key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
