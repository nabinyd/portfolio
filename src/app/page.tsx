import React from 'react';
import Homepage from '@/component/home';
import Skills from '@/component/skills';
import Footer from '@/component/footer';

export default function Home() {
  return (
    <div className='relative top-28' >
      <Homepage />
      <Skills />
      <Footer />

    </div>
  );
}
