interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = true, className }: Props) => (
  <div className={`mb-16 ${centered ? "text-center" : ""} ${className || ""}`}>
    <h2 className={`text-section font-display font-semibold ${className?.includes('text-white') ? 'text-white' : 'text-foreground'}`}>{title}</h2>
    {subtitle && (
      <p className={`mt-4 text-lg max-w-2xl leading-relaxed mx-auto ${className?.includes('text-white') ? 'text-white/80' : 'text-muted-foreground'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
