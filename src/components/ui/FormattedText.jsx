function FormattedText ({ text, className }) {
  if (!text) return null

  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith('**')
      ? (
        <strong
          key={i}
          className={className}
        >{
          part.replace(/\*\*/g, '')
          }
        </strong>
        )
      : (
          part
        )
  )
}

export { FormattedText }
