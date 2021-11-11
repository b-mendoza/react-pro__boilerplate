import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainMenu } from 'components/MainMenu';

import { ContentWrapper, MainLayout } from 'theme/shared';

export function Router() {
  return (
    <MainLayout>
      <BrowserRouter>
        <MainMenu />

        <Routes>
          <Route path="/">
            <Route
              element={
                <ContentWrapper>
                  <h1>Home</h1>
                </ContentWrapper>
              }
              index
            />

            <Route
              element={
                <ContentWrapper>
                  <h1>About</h1>
                </ContentWrapper>
              }
              path="about"
            />

            <Route
              element={
                <ContentWrapper>
                  <h1>Users</h1>
                </ContentWrapper>
              }
              path="users"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}
