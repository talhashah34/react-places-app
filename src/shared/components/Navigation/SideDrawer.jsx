import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = ({ children, show, onClick }) => {
  // ✅ Create a ref for the aside element
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      appear
      nodeRef={nodeRef}   // ✅ Pass the ref to CSSTransition
    >
      <aside ref={nodeRef} onClick= {onClick} className="side-drawer">
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
