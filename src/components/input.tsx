import { FocusEvent, InputHTMLAttributes, useState } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    props.onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    props.onBlur?.(event)
  }
  return (
    <div
      data-state={isFocused ? 'focused' : 'blurred'}
      className="border-1 rounded-md border border-base-button bg-base-input p-3 data-[state=blured]:border-base-button data-[state=focused]:border-yellow-dark"
    >
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full bg-transparent text-sm text-base-text outline-none placeholder:text-base-label"
      />
    </div>
  )
}
