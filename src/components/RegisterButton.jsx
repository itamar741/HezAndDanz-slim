// src/components/RegisterButton.jsx
export default function RegisterButton({
  children = '',
  href,
  onClick,
  size = 'sm', // "sm" | "md" | "lg"
  fullWidth = false, // true | false
  loading = false, // מצב טעינה (משבית את הכפתור)
  className = '',
  ariaLabel,
}) {
  const sizes = {
    sm: 'px-5 py-1.5 text-xs',
    md: 'px-6 py-1 text-base',
    lg: 'px-7 py-2.5 text-lg',
  };

  const base =
    'inline-flex items-center justify-center rounded-3xl font-normal ' +
    'relative bg-white text-black shadow-lg hover:shadow-xl ' +
    'after:absolute after:inset-0 after:rounded-3xl after:bg-brand/20 ' +
    'after:transition after:duration-200 after:hover:bg-brand/30 ' +
    'transition-[colors,box-shadow,border-color,transform] duration-150 ' +
    'active:scale-[0.99] will-change-transform ' + // ← במקום translate
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ' +
    'disabled:opacity-60 disabled:pointer-events-none ' +
    'motion-reduce:transition-none';

  const width = fullWidth ? 'w-full' : '';

  const content = (
    <span className="flex items-center gap-2">
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
      )}
      <span>{children}</span>
    </span>
  );

  const commonProps = {
    className: `${base} ${sizes[size]} ${width} ${className}`,
    'aria-label':
      ariaLabel || (typeof children === 'string' ? children : 'CTA'),
  };

  // אם יש href — רנדר כקישור
  if (href) {
    const handleClick = (e) => {
      // גלילה חלקה לעוגן (#id) אם רלוונטי
      if (href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      onClick?.(e);
    };
    return (
      <a href={href} onClick={handleClick} {...commonProps}>
        {content}
      </a>
    );
  }

  // אחרת — רנדר ככפתור
  return (
    <button type="button" onClick={onClick} disabled={loading} {...commonProps}>
      {content}
    </button>
  );
}
