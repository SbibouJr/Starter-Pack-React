import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const reactContainerElt = document.createElement('div');
reactContainerElt.classList.add('react-container');
document.body.appendChild(reactContainerElt);

render(<App />, reactContainerElt);
