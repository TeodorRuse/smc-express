/**
 * Translations index — re-exports types and assembles all languages
 * into a single lookup object.
 *
 * Usage:
 *   import { translations, LANGUAGES, type Lang, type Translations } from './translations';
 */
export type { Lang, Translations } from './types';
export { LANGUAGES } from './types';

import type { Lang, Translations } from './types';
import { en } from './en';
import { ro } from './ro';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';

/** All available translations keyed by language code. */
export const translations: Record<Lang, Translations> = { en, ro, de, fr, es };
