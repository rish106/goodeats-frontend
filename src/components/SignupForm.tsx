'use client'

import * as Form from '@radix-ui/react-form';
import * as React from 'react';
import { Button } from '@/ui/Button';
import { toast } from '@/ui/toast';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET as string;
  const router = useRouter();
  const [imageSrc, setImageSrc] = React.useState<string>('');
  let token = '' as string | null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }
  if (token) {
    toast({
      title: 'Already logged in',
      message: '',
      type: 'success',
      duration: 2000,
    });
    setTimeout(() => {
      router.push('/');
    }, 500);
  }

  async function handleImageChange (event: any) {
    const form = event.currentTarget;
    let fileInput = null as any;

    for (const ele of form.elements) {
      if (ele.name === 'file') {
        fileInput = ele;
        break;
      }
    }

    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'goodeats');
    toast({
      title: 'Uploading image',
      message: 'Please wait...',
      type: 'default',
      duration: 2000,
    });

    const data = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setImageSrc(data.secure_url);

    toast({
      title: 'Success',
      message: 'Image uploaded',
      type: 'success',
      duration: 1500,
    });
  }

  async function submitForm(data) {
    // set image
    if (imageSrc) {
      data.profile_picture = imageSrc;
    }
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (json.message) {
      toast({
        title: 'Error',
        message: json.message,
        type: 'error',
        duration: 2000,
      });
    } else {
      toast({
        title: 'Successfully registered',
        message: '',
        type: 'success',
        duration: 1500,
      });
      localStorage.setItem('token', json.token);
      setTimeout(() => {
        router.push('/');
      }, 1500);
    }
  }

  return (
    <Form.Root className='w-[360px] items-center px-8 md:px-0 pb-8'
      onSubmit={(event) => {
        const data = Object.fromEntries(new FormData(event.currentTarget));
        submitForm(data);
        event.preventDefault();
      }}
    >
      <Form.Field className='grid mb-[10px]' name='name'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-black font-medium text-[15px] leading-[35px]'>
            Name
          </Form.Label>
          <Form.Message className='text-black text-[13px] opacity-80' match='valueMissing'>
            Please enter name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
          className='box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]'
          type='text'
          required />
        </Form.Control>
      </Form.Field>
      <Form.Field className='grid mb-[10px]' name='username'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-black font-medium text-[15px] leading-[35px]'>
            Username
          </Form.Label>
          <Form.Message className='text-black text-[13px] opacity-80' match='valueMissing'>
            Please enter your username
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
          className='box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]'
          type='text'
          required />
        </Form.Control>
      </Form.Field>
      <Form.Field className='grid mb-[10px]' name='email'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-black font-medium text-[15px] leading-[35px]'>
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
          <input
          className='box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]'
          type='email'
          required />
        </Form.Control>
      </Form.Field>
      <Form.Field className='grid mb-[10px]' name='password'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-black font-medium text-[15px] leading-[35px]'>
            Password
          </Form.Label>
        </div>
        <Form.Control asChild>
          <input
          className='box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]'
          type='password'
          required />
        </Form.Control>
      </Form.Field>
      <Form.Field className='grid mb-[10px]' name='confirm_password'>
        <div className='flex items-baseline justify-between'>
          <Form.Label className='text-black font-medium text-[15px] leading-[35px]'>
            Confirm Password
          </Form.Label>
        </div>
        <Form.Control asChild>
          <input
          className='box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]'
          type='password'
          required />
        </Form.Control>
      </Form.Field>
      <form className='grid mb-[15px] items-start' onChange={handleImageChange}>
        <p className='text-black text-start font-medium text-[15px] leading-[35px]'>
          Upload Image
        </p>
        <input type='file' accept='image/*' name='file'/>
      </form>
      <Form.Submit asChild>
        <Button className='w-full'>
          Sign Up
        </Button>
      </Form.Submit>
    </Form.Root>
  );
};

export default SignupForm
