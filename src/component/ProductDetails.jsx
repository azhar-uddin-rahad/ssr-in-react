import React from 'react'
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
  } from 'react-share';
const ProductDetails = () => {
  return (
    <div
    style={{
      background: '#0000',
      height: '100vh',
      width: '100%',
    }}
  >
    <h1>I hope you like it</h1>

    <FacebookShareButton
      url={shareUrl}
      quote={'Title or jo bhi aapko likhna ho'}
      hashtag={'#portfolio...'}
    >
      <FacebookIcon size={40} round={true} />
    </FacebookShareButton>

    <WhatsappShareButton
      url={shareUrl}
      quote={'Title or jo bhi aapko likhna ho'}
      hashtag={'#portfolio...'}
    >
      <WhatsappIcon size={40} round={true} />
    </WhatsappShareButton>
  </div>
  )
}

export default ProductDetails
