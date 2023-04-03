'use client'

import React from 'react';
import * as Form from '@radix-ui/react-form';
import { Button } from '@/ui/Button';

const LoginForm = () => (
  <Form.Root className='w-[360px] items-center'>
    <Form.Field className='grid mb-[15px]' name='email'>
      <div className='flex items-baseline justify-between'>
        <Form.Label>
          Email
        </Form.Label>
        <Form.Message className='text-black text-[13px] opacity-80' match='valueMissing'>
          Please enter your email
        </Form.Message>
        <Form.Message className='text-black text-[13px] opacity-80' match='typeMismatch'>
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className='box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9' type='email' required />
      </Form.Control>
    </Form.Field>
    <Form.Field className='grid mb-[15px]' name='password'>
      <div className='flex items-baseline justify-between'>
        <Form.Label>
          Password
        </Form.Label>
      </div>
      <Form.Control asChild>
        <input className='box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9' type='password' required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <Button className='w-full'>
        Login
      </Button>
    </Form.Submit>
  </Form.Root>
);

export default LoginForm
