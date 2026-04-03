import { useState } from 'react'
import { BrandMark } from './BrandMark'

type LogoProps = {
  className?: string
  imgClassName?: string
  showWordmark?: boolean
  wordmarkClassName?: string
}

export function Logo({
  className = '',
  imgClassName = 'h-10 w-auto sm:h-11',
  showWordmark = false,
  wordmarkClassName = 'font-display text-xl font-semibold tracking-tight text-brand-950 sm:text-2xl',
}: LogoProps) {
  const [broken, setBroken] = useState(false)

  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`}>
      {broken ? (
        <BrandMark className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
      ) : (
        <img
          src="/images/logo.png"
          alt="Meridian Academy"
          className={`${imgClassName} shrink-0 object-contain object-left`}
          width={160}
          height={48}
          onError={() => setBroken(true)}
        />
      )}
      {showWordmark && (
        <span className={wordmarkClassName}>
          Meridian<span className="text-accent-dark"> Academy</span>
        </span>
      )}
    </a>
  )
}
