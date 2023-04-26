import styled from "@emotion/styled";
import Link from "next/link";
import { RipplingLogo } from "./rippling-logo";

const HomeLink = styled(Link)`
  line-height: 0;
`;

export const HomeButton = () => (
  <HomeLink href="/" aria-label="Navigate home">
    <RipplingLogo />
  </HomeLink>
);
