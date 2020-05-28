import Link from "next/link";

import { LinkItem, LinkContainer } from "./SideBarLink.styles";

const SideBarLink = ({ href, children }) => {
  return (
    <LinkContainer>
      <Link href={href}>
        <LinkItem>{children}</LinkItem>
      </Link>
    </LinkContainer>
  );
};

export default SideBarLink;
