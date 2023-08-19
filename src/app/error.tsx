'use client';

interface errorProps {
  error: Error;
}

export default function error({ error }: errorProps) {
  return <pre>{JSON.stringify(error?.message, null, 2)}</pre>;
}
