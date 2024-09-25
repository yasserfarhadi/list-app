'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoginSchema } from '@/schemas/auth';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { login } from '@/actions/login';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CardWrapper } from './card-wrapper';
import { Input } from '../ui/input';

export const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [error, setError] = React.useState('');
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider'
      : '';

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function submitHandler(values: z.infer<typeof LoginSchema>) {
    setError('');
    startTransition(async () => {
      try {
        const data = await login(values);
        setError(data?.error || '');
      } catch (error) {
        if (error instanceof Error) {
          setError('Something went wrong! \n ' + error.message);
        }
      }
    });
  }

  return (
    <CardWrapper
      headerLabel="Welcome back"
      extra={<Link href="/auth/register">Don&apos;t have an account?</Link>}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="space-y-6"
          noValidate
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="test@example.com"
                      type="email"
                      className="bg-background/20 placeholder:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="password"
                      type="password"
                      className="bg-background/20 placeholder:text-white"
                    />
                  </FormControl>
                  <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="px-0 font-normal"
                  >
                    <Link href="/auth/reset">Forgot password?</Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError} />
          <Button disabled={isPending} type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
