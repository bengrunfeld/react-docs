import { Page, MainContent } from "./PageLayout.styles";
import { Nav, SideBar } from "../";

const hello = msg => msg;

const PageLayout = ({ children }) => {
  return (
    <Page>
      <Nav />
      <MainContent>
        <SideBar />
        {children}
      </MainContent>
    </Page>
  );
};

export default PageLayout;
