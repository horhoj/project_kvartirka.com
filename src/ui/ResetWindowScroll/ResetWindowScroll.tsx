'use client';
import { useWindowScrollReset } from '~/hooks/useWindowScrollReset';

export function ResetWindowScroll() {
  useWindowScrollReset(null);
  return <></>;
}
