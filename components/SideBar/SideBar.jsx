import { SideBarContainer } from "./SideBar.styles";
import { SideBarLink } from "./components";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarLink href="/">Introduction</SideBarLink>
      <SideBarLink href="/getting-started">Getting Started</SideBarLink>
      <SideBarLink href="/installation">Installation</SideBarLink>
    </SideBarContainer>
  );
};

export default SideBar;
