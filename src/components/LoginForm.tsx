'use client'

import React from 'react';
import * as Form from '@radix-ui/react-form';
import { Button } from '@/ui/Button';

const LoginForm = () => (
  <Form.Root className='w-full items-center mt-4'>
    <Form.Field className='grid mb-6' name='email'>
      <div className='flex items-baseline text-24 justify-between'>
        <Form.Label className='text-black font-medium leading-35'>Email</Form.Label>
        <Form.Message className='text-black text-8 opacity-80' match='valueMissing'>
          Please enter your email
        </Form.Message>
        <Form.Message className='text-black text-8 opacity-80' match='typeMismatch'>
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className='w-full inline-flex items-center justify-center rounded-4 text-black text-24 h-35 leading-1 bg-white hover:shadow-1-black focus:shadow-2-black selection:bg-black selection:text-white' type='email' required />
      </Form.Control>
    </Form.Field>
    <Form.Field className='grid mb-6' name='password'>
      <div className='flex items-baseline justify-between'>
        <Form.Label className='text-black text-24 font-medium leading-35'>Password</Form.Label>
      </div>
      <Form.Control asChild>
        <input className='w-full inline-flex items-center justify-center rounded-4 text-black text-24 bg-white shadow-1-black' type='password' required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <Button>Login</Button>
    </Form.Submit>
  </Form.Root>
);

export default LoginForm
