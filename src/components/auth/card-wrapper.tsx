'use client';

import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  extra: React.ReactNode;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  headerLabel,
  extra,
}) => {
  return (
    <Card className="w-[400px] shadow-xl border-none bg-white/50">
      <CardHeader>
        <h2>{headerLabel}</h2>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{extra}</CardFooter>
    </Card>
  );
};
