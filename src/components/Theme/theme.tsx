import React, { useState } from 'react';
// import './ThemeLibrary.scss';

interface Theme {
  name: string;
  background: string;
  text: string;
}

interface ThemeLibraryProps {
  defaultThemes: Theme[];
}

const ThemeLibrary: React.FC<ThemeLibraryProps> = ({ defaultThemes }) => {
  const [themes, setThemes] = useState(
    JSON.parse(localStorage.getItem('themes') || JSON.stringify(defaultThemes))
  );
  const [currentTheme, setCurrentTheme] = useState(
    JSON.parse(localStorage.getItem('currentTheme') || '{}')
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = themes.find((theme:any) => theme.name === event.target.value);
    setCurrentTheme(selectedTheme);
    localStorage.setItem('currentTheme', JSON.stringify(selectedTheme));
    document.documentElement.style.setProperty('--background', selectedTheme.background);
    document.documentElement.style.setProperty('--text', selectedTheme.text);
  };

  const handleAddTheme = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTheme: Theme = {
      name: event.currentTarget.name.value,
      background: event.currentTarget.background.value,
      text: event.currentTarget.text.value
    };

    setThemes([...themes, newTheme]);
    localStorage.setItem('themes', JSON.stringify([...themes, newTheme]));
  };

  return (
    <div className="theme-library">
      <label>Selecciona un tema:</label>
      <select value={currentTheme.name} onChange={handleChange}>
        {themes.map((theme:any) => (
          <option key={theme.name} value={theme.name}>
            {theme.name}
          </option>
        ))}
      </select>
      <form onSubmit={handleAddTheme}>
        <label>Nombre:</label>
        <input type="text" name="name" required />
        <label>Color de fondo:</label>
        <input type="color" name="background" required />
        <label>Color de texto:</label>
        <input type="color" name="text" required />
        <button type="submit">Agregar tema</button>
      </form>
    </div>
  );
};

export default ThemeLibrary;