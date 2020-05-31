import { AnchorTag } from "./Anchor.styles";

const Anchor = ({ href, children }) => (
  <AnchorTag href={href}>{children}</AnchorTag>
);

export default Anchor;
