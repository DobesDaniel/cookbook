# Repertoár receptů

Osobní dvojjazyčná kuchařka s recepty, které jsem vyzkoušel nebo upravil podle sebe.

Web je dostupný na:

**https://dobesdaniel.github.io/cookbook/**

## Co web nabízí

- českou a anglickou verzi,
- vyhledávání receptů podle názvu,
- filtrování pomocí více tagů,
- kartotéku ovládanou myší i dotykem,
- rychlý náhled a samostatnou stránku každého receptu,
- formulář pro vytvoření nového Markdown receptu.

## Spuštění na počítači

Po stažení projektu otevři terminál v jeho hlavní složce a spusť:

```sh
npm install
npm run dev
```

Česká verze potom poběží na:

**http://localhost:4321/cookbook/cs/**

## Přidání receptu

1. Otevři na webu **Přidat recept**.
2. Vyplň formulář a stáhni vytvořený soubor `.md`.
3. Český recept vlož do `src/content/recipes/cs/`, anglický do `src/content/recipes/en/`.
4. Obrázek vlož do `public/images/` a zkontroluj jeho cestu v receptu.
5. Přeložené verze stejného receptu musí používat stejný `translationKey`.

## Nasazení

Po odeslání změn do větve `main` GitHub Actions web automaticky sestaví a nasadí na GitHub Pages.

Ruční sestavení pro kontrolu lze spustit příkazem:

```sh
npm run build
```
