import './index.css';

import { StrictMode } from 'react';
import { render } from 'react-dom';

import { Router } from 'components/Router';

const rootNode = document.getElementById('root');

render(
  <StrictMode>
    <Router />
  </StrictMode>,
  rootNode,
);
