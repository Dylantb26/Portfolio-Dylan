// LanguageSwitcher.tsx
import { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import type { Language } from '../../utils/loadPageTranslations';

interface LangOption {
  code: Language;
  flag: string;
}

const languages: LangOption[] = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'nl', flag: '🇳🇱' },
];

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
