"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://carlclifton.net/${src}?=w${width}&q=${quality || 75}`;
}
