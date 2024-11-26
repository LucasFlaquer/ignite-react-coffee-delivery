import { ReactNode } from 'react'

interface Props {
  title: string
  description: string
  headerIcon: ReactNode
  children: ReactNode
}

export function Card({ headerIcon, children, description, title }: Props) {
  return (
    <div className="rounded-lg bg-base-card p-10">
      <div className="mb-8 flex gap-2">
        {headerIcon}
        <div>
          <h3 className="text-md text-base-subtitle">{title}</h3>
          <p className="text-sm text-base-text">{description}</p>
        </div>
      </div>
      {children}
    </div>
  )
}
