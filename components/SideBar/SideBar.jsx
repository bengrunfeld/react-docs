import { SideBarContainer } from "./SideBar.styles";
import { SideBarLink } from "./components";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarLink href="/">Home</SideBarLink>
      <SideBarLink href="/jsx">JSX</SideBarLink>
      <SideBarLink href="/elements">Elements</SideBarLink>
      <SideBarLink href="/components">Components</SideBarLink>
    </SideBarContainer>
  );
};

export default SideBar;
