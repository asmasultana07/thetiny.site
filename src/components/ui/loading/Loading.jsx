import React from 'react';

export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-violet-300" role="status">
      <span className="h-3 w-3 animate-spin rounded-full border-2 border-violet-300/30 border-t-violet-300" />
      <span>{message}</span>
    </div>
  );
}
