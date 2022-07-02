import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled from "styled-components";

import Global from "../styles/Global";

interface LayoutProps {
  children: ReactNode;
}

const BaseContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  overflow: hidden;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const { pathname } = useRouter()

  return (
    <>
      <BaseContainer>
        <Global />
        <ContentContainer>{children}</ContentContainer>
      </BaseContainer>
    </>
  );
};

export default Layout;
