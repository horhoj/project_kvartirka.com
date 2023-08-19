import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children?: ReactNode;
}

export function Portal({ children }: PortalProps) {
  return typeof window !== 'undefined'
    ? createPortal(<>{children}</>, document.body)
    : null;
}
