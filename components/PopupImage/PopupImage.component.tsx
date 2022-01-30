/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import { WrapModalImage } from './PopupImage.style'

interface PopupImageProps{
  src: string;
  isShow: boolean;
  handleToggle: () => void;
}

const PopupImageComponent:FC<PopupImageProps> = ({src, isShow, handleToggle}) => {
  return (
    <WrapModalImage isShow={isShow}>
      <div className='background' onClick={() => handleToggle()}></div>
      <div className='image-wrapper'>
        <span className='close' onClick={() => handleToggle()}>(x) Close</span>
        <img src={src} alt='image' />
      </div>
    </WrapModalImage>
  )
}

export default PopupImageComponent
