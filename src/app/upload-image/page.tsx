'use client'

import { useState } from 'react';
import React from 'react';
import LargeHeading from '@/ui/LargeHeading';
import { Button } from '@/ui/Button';

const Page = () => {
  const [imageSrc, setImageSrc] = useState();

  const handleOnChange = (e: any) => {
    console.log(e.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    let fileInput = null as any;
    console.log(form.elements);
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

    const data = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setImageSrc(data.secure_url);
  }

  return (
    <div className='flex flex-col pt-32 gap-10'>
      <LargeHeading>Upload Image</LargeHeading>
      <form className='flex flex-col gap-4 w-full items-center' onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <input type='file' accept='image/\*' name='file'/>
        <img src={imageSrc} />
        <Button>
          Upload
        </Button>
      </form>
    </div>
  )
}

export default Page
