"use client";

export default function Error({ error }) {
  return (
    <html>
      <body>
        <h2>The Neon Lights are off on this avenue!</h2>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
