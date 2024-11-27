import {
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
  useState,
} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export const Input = forwardRef(function Input(
  {
    isOptional,

    ...rest
  }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    rest.onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    rest.onBlur?.(event)
  }

  return (
    <div
      data-state={isFocused ? 'focused' : 'blurred'}
      className="border-1 flex items-center gap-3 rounded-md border border-base-button bg-base-input p-3 data-[state=blured]:border-base-button data-[state=focused]:border-yellow-dark"
    >
      <input
        {...rest}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full bg-transparent text-sm text-base-text outline-none placeholder:text-base-label"
      />
      {isOptional && (
        <span className="font-text text-xs text-base-label">Opcional</span>
      )}
    </div>
  )
})
