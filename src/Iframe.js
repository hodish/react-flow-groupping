import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom/cjs/react-dom.development";

export const IFrame = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  const stylesSet = useRef(false);

  useEffect(() => {
    if (!contentRef) return;
    if (stylesSet.current) return;
    stylesSet.current = true;
    // apply parent styles into iframe
    for (const s of Array.from(document.getElementsByTagName("style"))) {
      contentRef.contentDocument.body.append(s.cloneNode(true));
    }
  }, [contentRef]);

  return (
    <iframe
      {...props}
      title="nested-frame"
      ref={setContentRef}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};
