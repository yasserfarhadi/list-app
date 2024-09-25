import React from 'react';
import { Card, CardFooter, CardHeader } from '../ui/card';
import Link from 'next/link';

const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <h2>Oops! Something went wrong!</h2>
      </CardHeader>
      <CardFooter>
        <Link href="/auth/login">Back to login</Link>
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
