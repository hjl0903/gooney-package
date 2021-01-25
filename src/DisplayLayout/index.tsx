import React, { CSSProperties, ReactNode } from 'react';

import styled from '@emotion/styled';
import { flexbox, FlexboxProps, layout, LayoutProps } from 'styled-system';
import { css } from '@emotion/css';

export interface DisplayLayoutProps {
  header: ReactNode;
  content: ReactNode;
  headerStyle: CSSProperties;
  contentStyle: CSSProperties;
}

export type FlexProps = FlexboxProps & LayoutProps;

const Flex = styled.div<FlexProps>`
  ${flexbox}
  ${layout}
`;

const Header = styled.div`
  height: 40px;
  width: 100%;
  line-height: 40px;
  padding: 2px 16px;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

export default function(props: DisplayLayoutProps) {
  const { header, content, headerStyle, contentStyle } = props;

  return (
    <Flex
      height="100%"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
    >
      <Header className={css(headerStyle as any)}>{header}</Header>
      <Content className={css(contentStyle as any)}>{content}</Content>
    </Flex>
  );
}
