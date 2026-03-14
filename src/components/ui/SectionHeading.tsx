interface SectionHeadingProps {
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`heading-display text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-primary-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className="divider-gold mx-auto mt-4" />
    </div>
  )
}
