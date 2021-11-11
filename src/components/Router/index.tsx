import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from 'components/App';
import { MainMenu } from 'components/MainMenu';

import { MainLayout } from 'theme/shared';

export function Router() {
  return (
    <MainLayout>
      <BrowserRouter>
        <MainMenu />

        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}
