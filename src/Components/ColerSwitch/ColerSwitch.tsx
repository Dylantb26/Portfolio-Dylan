import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function ColorSwitch() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('light');
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const page = document.getElementById('page');
    if (!page) return;

    page.classList.remove('light', 'dark');
    page.classList.add(theme);
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="form-check form-switch">
      <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="themeSwitch"
      checked={theme === 'dark'}
      onChange={toggleTheme}
      />
    </div>
  );
}

export default ColorSwitch;
