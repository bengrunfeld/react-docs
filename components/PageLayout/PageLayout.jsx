import { useState } from "react";
import { Page, MainContent } from "./PageLayout.styles";
import { Nav, SideBar, MobileMenu } from "../";

const hello = msg => msg;

const PageLayout = ({ children }) => {
  const [state, setState] = useState(false);

  const toggleMenu = () => setState(!state);

  return (
    <Page>
      <Nav toggleMenu={toggleMenu} />
      <MobileMenu isVisible={state} />
      <MainContent>
        <SideBar />
        {children}
      </MainContent>
    </Page>
  );
};

export default PageLayout;
