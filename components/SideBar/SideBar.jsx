import { SideBarContainer } from "./SideBar.styles";
import { SideBarLink } from "./components";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarLink href="/">Introduction</SideBarLink>
      <SideBarLink href="/">Getting Started</SideBarLink>
      <SideBarLink href="/">Installation</SideBarLink>
    </SideBarContainer>
  );
};

export default SideBar;
