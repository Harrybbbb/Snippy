import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { content } from './Cardcontent';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import toast, { Toaster } from 'react-hot-toast';

export default function Code() {
  const { id } = useParams();
  const location = useLocation();

  const isDsaPage = location.pathname.includes('/Dsa_nerds')

  const codeShow = content.find((item) => {
    if (isDsaPage){
      return item.id === Number(id) && item.category === 'DSA';
    }
    else{
      return item.id === Number(id);
    }
  })

  const handleCopy = async () => {
    try {
      await window.navigator.clipboard.writeText(codeShow.code)
      toast.success('Happy Coding!')
    } catch (error) {
      console.log("unable to  copy", error)
      toast.error("try agian")
    }
  }
  return (
    <div className=" flex justify-center flex-col py-10 px-4 sm:px-8 lg:px-16">
  {codeShow ? (
    <>
      <div className="bg-darkblack p-2 rounded-md max-w-4xl shadow-2xl shadow-[#3b82f6]/10 sm:px-5  mx-auto overflow-x-auto">
      <div className='flex justify-end'><button onClick = {handleCopy} className='px-3 py-1 sm:px-4 sm:py-2 text-lg sm:text-xl rounded-md border-solid bg-black text-white hover:bg-background transition-all font-basic'>Copy</button></div>
      <Toaster />
      <SyntaxHighlighter
          style={irBlack}
          wrapLongLines = {true}
        >
          {codeShow.code}
        </SyntaxHighlighter>
        
      </div>
    </>
  ) : (
    <p className="text-white text-center text-3xl">Code not found</p>
  )}
</div>
    )
}
