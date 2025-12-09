'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'fadeInUp'
  delay?: number
  duration?: number
  threshold?: number
}

const animationClasses = {
  fadeIn: 'opacity-0',
  slideUp: 'opacity-0 translate-y-8',
  slideLeft: 'opacity-0 -translate-x-8',
  slideRight: 'opacity-0 translate-x-8',
  scale: 'opacity-0 scale-95',
  fadeInUp: 'opacity-0 translate-y-12',
}

const animationTransitions = {
  fadeIn: 'opacity-100',
  slideUp: 'opacity-100 translate-y-0',
  slideLeft: 'opacity-100 translate-x-0',
  slideRight: 'opacity-100 translate-x-0',
  scale: 'opacity-100 scale-100',
  fadeInUp: 'opacity-100 translate-y-0',
}

export default function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
    delay,
  })

  const baseClass = animationClasses[animation]
  const transitionClass = animationTransitions[animation]

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${baseClass} ${
        isVisible ? transitionClass : ''
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

