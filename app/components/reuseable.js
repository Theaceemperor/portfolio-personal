'use client'

import React, { useState } from 'react';
import { FaArrowUp, FaFacebook, FaShareNodes, FaXTwitter } from 'react-icons/fa6';

export function PortfolioCard({ project }) {

  return (
    <div className="bg-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex justify-center mb-4">
            {project.technologies.map((tech, i) => (
            <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm mr-2">
                {tech}
            </span>
            ))}
        </div>
        <div className="flex justify-center space-x-4">
            <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline"
            >
            Live Demo
            </a>
            <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline"
            >
            Source Code
            </a>
        </div>
    </div>
  )
}

export function ShareLink({ url }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div>
        <input type="text" value={url} readOnly />
        <button onClick={handleCopyLink}>{copied ? 'Copied!' : 'Copy Link'}</button>
        <div>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
            Share on Twitter
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
            Share on Facebook
        </a>
        {/* Add more social network share links as needed */}
        </div>
    </div>
  );
};

export function ShareButton({ url }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowOptions(false);
    } catch (error) {
      console.error('Error copying link: ', error);
      // Handle error if clipboard copying fails
    }
  };

  const handleShareOnSocialMedia = (platform) => {
    // Add logic to share the link on the specified social media platform
    // For example, open a new window with the share URL for the selected platform
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      // Add cases for other social media platforms as needed
      default:
        break;
    }
    setShowOptions(false);
  };

  return (
    <div>
      <button onClick={handleToggleOptions} className="cursor-pointer flex items-center">Share <FaShareNodes className="text-blue-600 ml-2" /></button>
      {showOptions && (
        <div className='p-4 bg-white rounded space-x-2 text-blue-600 flex text-lg'>
          <button onClick={handleCopyLink} className='text-base'>Copy Link</button>
          <button onClick={() => handleShareOnSocialMedia('twitter')}><FaXTwitter /></button>
          <button onClick={() => handleShareOnSocialMedia('facebook')}><FaFacebook /></button>
          {/* Add more social network share options as needed */}
        </div>
      )}
    </div>
  );
};

export function ScrollToTop() {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);

  const handleScroll = () => {
    // Show/hide scroll-to-top button based on scroll position
    setShowScrollToTop(window.scrollY > 100);
  };

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showScrollToTop
    ?
    <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 text-white/80 p-2 rounded-full bg-blue-600 hover:bg-blue-400 focus:outline-none z-20"
    >
        <FaArrowUp />
    </button>
    :
    null
  )
}
