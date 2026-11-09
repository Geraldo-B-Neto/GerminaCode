import styles from './styles.module.css';

/**
 * Componente Button reutilizável do System Design Germina Code
 * @param {'primary' | 'dark' | 'broto' | 'outline' | 'outlineDark' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as = 'button',
  icon,
  iconPosition = 'right',
  ...props
}) {
  const Component = as;
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </Component>
  );
}

