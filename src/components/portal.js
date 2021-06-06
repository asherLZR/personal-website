/* eslint-disable no-undef */
import ReactDOM from 'react-dom';

// Mounts to the portal root created in gatsby-ssr.js
export const Portal = ({ children }) => {
  const portalRoot =
    typeof document !== `undefined` ? document.getElementById('portal') : null;

  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(children, portalRoot);
};
