import { ReactNode } from 'react'

interface Props {
  text: string
  children: ReactNode
}

export function IntroItem({ text, children }: Props) {
  return (
    <div className="text-base-text font-text flex items-center gap-3 text-base">
      {children}
      {text}
    </div>
  )
}
