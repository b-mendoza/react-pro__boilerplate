import styled from '@emotion/styled';

import { paddingReset } from './resets';

export const ContentWrapper = styled.section`
  ${paddingReset}

  width: 100%;
`;

export const MainLayout = styled.main`
  display: grid;

  grid-template-columns: auto 1fr;
`;
