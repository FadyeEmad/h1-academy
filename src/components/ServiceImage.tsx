import { useState } from 'react'

type ServiceImageProps = {
  src: string
  alt: string
  accent: 'a' | 'b' | 'c' | 'd'
}

const fallbacks: Record<ServiceImageProps['accent'], string> = {
  a: 'from-brand-300 via-brand-400 to-accent/40',
  b: 'from-brand-800 via-brand-700 to-brand-500',
  c: 'from-brand-200 via-brand-300 to-brand-600/50',
  d: 'from-brand-900 via-brand-800 to-accent/35',
}

export function ServiceImage({ src, alt, accent }: ServiceImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`h-full w-full bg-gradient-to-br ${fallbacks[accent]}`}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <img
      src={src}
      alt=""
      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  )
}
