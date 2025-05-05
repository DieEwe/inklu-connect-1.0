import React from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div<{ $variant?: string }>`
  button {
    font-family: inherit;
    font-size: 20px;
    background: #1a0036;
    color: white;
    fill: rgb(155, 153, 153);
    padding: 0.4em 1em; /* reduced vertical padding */
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    font-weight: 1000;
    transition: background 0.2s, color 0.2s;
    ${({ $variant }) =>
      $variant === "green" &&
      css`
        background: #85c237;
        color: #111;
        fill: #222; /* dark gray cloud */
        &:hover {
          background: #6ea02c;
          color: #111;
          fill: #222;
        }
      `}
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover {
    background: #120024;
    color: white;
    fill: #fff;
    ${({ $variant }) =>
      $variant === "green" &&
      css`
        background: #6ea02c !important;
        color: #111 !important;
        fill: #222 !important;
      `}
  }

  button:hover .svg-wrapper {
    transform: scale(1.25);
    transition: 0.5s linear;
  }

  button:hover svg {
    transform: translateX(1.2em) scale(1.1);
    ${({ $variant }) =>
      $variant === "green" &&
      css`
        fill: #222 !important;
      `}
  }

  button:hover span {
    opacity: 0;
    transition: 0.5s linear;
  }

  button:active {
    transform: scale(0.95);
  }
`;

const BookmarkButton = ({ variant }: { variant?: "green" }) => {
  return (
    <StyledWrapper $variant={variant}>
      <button>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} className="icon">
              <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z" />
            </svg>
          </div>
        </div>
        <span>Save</span>
      </button>
    </StyledWrapper>
  );
};

export default BookmarkButton;
