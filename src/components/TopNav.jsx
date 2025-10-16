import React, { useState, useEffect, useRef } from 'react';
import { CiMicrophoneOn } from "react-icons/ci";
import { RiSearch2Line } from 'react-icons/ri';

const TopNav = () => {
  const [listening, setListening] = useState(false);
  const [searchText, setSearchText] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Your browser does not support Speech Recognition');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    
    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setSearchText(transcript);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleListening = () => {
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  return (
    <div className='w-full h-fit py-6 px-[50px] bg-white'>
      <div className='search lg:w-[360px] h-[48px] rounded-[12px] bg-bgColor flex items-center justify-between py-[14px] px-[18px]'>
        <RiSearch2Line className='text-xl text-[#7E7E8F]' />
        <input
          className='flex-1 outline-none pl-2 text-[14px] font-poppins font-semibold text-[#C6CBD9]'
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Type or speak..."
        />
        <button
          className={`w-8 h-8  text-xl flex justify-center items-center duration-[0.4s] ${
            listening 
              ? 'rounded-full bg-brandColor text-white animate-pulse'
              : 'text-[#7E7E8F]'
          }`}
          onClick={toggleListening}
        >
          <CiMicrophoneOn />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
