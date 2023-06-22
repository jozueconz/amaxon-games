import { Image } from "@chakra-ui/image";
import { HStack } from "@chakra-ui/layout";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
    </HStack>
  );
};

export default Navbar;
