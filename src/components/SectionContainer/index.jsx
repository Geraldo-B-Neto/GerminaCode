import styles from './styles.module.css';

export default function SectionContainer({
  children,
  className = '',
  narrow = false,
  fullWidth = false,
  as: Component = 'div',
  ...props
}) {
  const classes = [
    styles.container,
    narrow && styles.narrow,
    fullWidth && styles.fullWidth,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

