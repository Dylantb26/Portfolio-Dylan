export type Language = 'en' | 'nl';

export const loadPageTranslations = async (
  pageFolder: string,
  language: Language
): Promise<Record<string, string>> => {
  try {
    if (pageFolder === 'Layout') {
      const translations = await import(
        `../Components/Layout/${language}.json`
      );
      return translations.default;
    }

    const translations = await import(
      `../Pages/${pageFolder}/${language}.json`
    );

    return translations.default;
  } catch (err) {
    console.error(`Translations not found for ${pageFolder} in ${language}`);
    return {};
  }
};