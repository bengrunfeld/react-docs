import { SideBarContainer, SideBarLink } from "./SideBar.styles";
import Link from "next/link";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Link href="/introduction">
        <SideBarLink>Introduction</SideBarLink>
      </Link>

      <Link href="/getting-started">
        <SideBarLink>Getting Started</SideBarLink>
      </Link>

      <Link href="/components">
        <SideBarLink>Components</SideBarLink>
      </Link>
    </SideBarContainer>
  );
};

export default SideBar;
