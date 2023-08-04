import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'External Links',
  description: '',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
