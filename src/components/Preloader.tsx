import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''}>
      <div className="preloader-content">
        <div className="preloader-logo">MSS.dev</div>
        <div className="preloader-bar">
          <div className="preloader-fill" />
        </div>
      </div>
    </div>
  );
}
