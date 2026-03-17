interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: Props) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
    <h2 className="text-section font-display font-semibold text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
