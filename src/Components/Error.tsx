import { useEffect, useState } from 'react';
import styles from '../styles/Error.module.css'


const Error = ({ error }: { error: Error }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className={styles.error}>{error.message}</div>
  )
}

export default Error