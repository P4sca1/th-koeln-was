# Webseite des Studentischen Wahlausschusses

Enthält Informationen über aktuelle Wahlen, sowie die Wahlergebnisse der letzten Jahre.

## Für Mitglieder des Wahlausschusses

Im Sciebo des Wahlausschusses befindet sich die Anleitung zur Website im Ordner Handbuch & Planungsdokumente.

## Für Entwickler

### Nützliche Links

- [Nuxt.js 3 Dokumentation](https://v3.nuxtjs.org)
- [Tailwind Dokumentation](https://tailwindcss.com/)
- [Nuxt Content Dokumentation](https://content.nuxtjs.org)

### Setup

Dependencies installieren

```bash
pnpm install
```

### Entwicklungs Server

```bash
pnpm dev
```

### Produktion

Die Webseite generieren

```bash
pnpm generate
```

Vorschau der Webseite nach der Generierung anzeigen

```bash
pnpm preview
```

## Dokumente

Zum Beispiel Bilder und PDF Dateien. Diese gehören in den Ordner `public/dokumente`.
Leerzeichen mit `_` ersetzen und Sonderzeichen vermeiden. Zum Beispiel `wahlverkuendung_2024.pdf` statt `Wahlverkündung 2024.pdf`.
Zur Verlinkung auf Seiten bitte `ContentLink` nutzen und keine Standard-Markdown-Links.
