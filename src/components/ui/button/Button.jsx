import React from 'react';

export default function Button({ children, type = 'button', onClick, disabled = false, ...props }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
