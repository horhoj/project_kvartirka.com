import classNames from 'classnames';
import styles from './UnitsTypeButton.module.scss';

interface UnitsTypeButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export function UnitsTypeButton({
  children,
  isActive,
  onClick,
}: UnitsTypeButtonProps) {
  return (
    <button
      className={classNames(
        styles.UnitsTypeButton,
        isActive && styles.unitsTypeBtnActive,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
