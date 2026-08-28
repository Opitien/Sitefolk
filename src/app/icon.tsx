import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F7F7F3',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px', // Slight rounding looks great on favicons
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z" stroke="#171717" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="16" cy="12" r="3.5" fill="#171717" />
          <path d="M10 23 C10 19 12.5 17.5 16 17.5 C19.5 17.5 22 19 22 23" stroke="#171717" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 9 L11 13" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 9 L21 13" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
