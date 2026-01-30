# Système de Design Tokens (Zuii)

Ce document décrit comment utiliser et modifier le système de tokens de design de Zuii.

## 1. Architecture

Les tokens sont définis au format JSON et transformés en CSS, SCSS et TypeScript via [Style Dictionary](https://styledictionary.com/).

### Structure des Fichiers Source

-   **`tokens/*.json`** : Définition des tokens (source de vérité).
    -   `colors.json` : Palette de couleurs, thèmes, variantes (primary, gray...).
    -   `radius.json` : Rayons de bordure (border-radius).
-   **`style-dictionary/`** : Configuration du générateur et scripts de build.

### Fichiers Générés (Package Distribué)

Les fichiers sont générés dans **`dist/core/styles/`** lors du build du package npm :
-   `tokens.css` : Variables CSS (`:root { ... }`).
-   `_tokens.scss` : Variables SCSS organisées en maps.
-   `tokens.ts` : Constantes TypeScript.

## 2. Workflow de Développement

### Ajouter ou Modifier un Token

1.  Ouvrez le fichier JSON correspondant dans `tokens/`.
2.  Ajoutez ou modifiez votre token.

**Exemple (`radius.json`) :**
```json
{
  "border": {
    "radius": {
      "custom": { "value": "1.5rem" }
    }
  }
}
```

### Génération Automatique

Les tokens sont générés automatiquement lors du processus de build du package :

```bash
pnpm run build
```

Ce script exécute successivement :
1.  **`prebuild`** : Génère les tokens dans `src/core/styles/` (ignorés par Git).
2.  **`build`** : Compile la bibliothèque avec Vite.
3.  **`postbuild`** : Copie les tokens générés dans `dist/core/styles/` pour la distribution.

### Générer Manuellement (pour test)

Si vous voulez voir le résultat sans faire un build complet :

```bash
pnpm run tokens:build
```

Les fichiers apparaîtront temporairement dans `src/core/styles/`.

## 3. Conventions de Nommage

-   **CSS** : Kebab-case (`--color-primary`, `--size-1`).
-   **TypeScript** : Constant case (`COLOR_PRIMARY`).
-   **SCSS** : Maps nommées (`$color`, `$size`).

## 4. Utilisation

### Dans un projet utilisant Zuii

Une fois Zuii installé, vous pouvez importer les tokens directement depuis le dossier `dist` :

```scss
// SCSS
@use "zuii/dist/core/styles/tokens" as *;

.my-component {
  background-color: map-get($color, "primary");
}
```

```javascript
// TypeScript
import { COLOR_PRIMARY } from 'zuii/dist/core/styles/tokens';
```

### Personnalisation

Si vous souhaitez générer vos propres tokens dans votre projet à partir de vos fichiers sources, utilisez l'outil CLI inclus :

```bash
npx zuii-tokens --output src/styles
```
