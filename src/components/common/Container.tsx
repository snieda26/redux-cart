import styles from '@/styles/components/common/Container.module.scss';

export const Container = ({
  children,
  additionalStyles,
}: {
  children: React.ReactNode;
  additionalStyles?: React.CSSProperties;
}) => {
  return (
    <div className={styles.container} style={additionalStyles}>
      {children}
    </div>
  );
};
