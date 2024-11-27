import { forwardRef, InputHTMLAttributes, LegacyRef, ReactNode } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isSelected: boolean
  children: ReactNode
}

export const ButtonRadio = forwardRef(function Component(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <label
      htmlFor={rest.id}
      data-state={isSelected}
      className="flex flex-1 cursor-pointer items-center gap-3 rounded-md border border-transparent bg-base-button p-4 hover:bg-base-hover data-[state=true]:border-purple-dark data-[state=true]:bg-purple-light"
    >
      <input type="radio" className="hidden" {...rest} ref={ref} />
      {children}
    </label>
  )
})
