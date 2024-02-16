import styled, { keyframes } from "styled-components";
import React from "react";

interface GalleryItemProps {
  index: number;
  image: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ index, image }) => {
  return (
    <>
      <StyledImageWrapper>
        <img src={image} alt={`Image ${index + 1}`} />
      </StyledImageWrapper>
    </>
  );
};

const StyledImageWrapper = styled.div`
  img {
    width: auto;
    max-height: 180px;
    border-radius: 8px;
    display: block;
  }
};`;

export default GalleryItem;
