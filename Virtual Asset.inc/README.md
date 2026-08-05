# Virtual Asset.Inc

Static, GitHub Pages-ready website for Virtual Asset.Inc.

## Publish on GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main`, then `/ (root)` and save.
4. Update `hello@virtualasset.inc`, then paste each Roblox Universe ID into the visible `universeIds` list in `assets/data/portfolio.json` before launching.

This site is static by design: the contact form uses the visitor's mail app and does not collect data on a server. A GitHub Action refreshes the public Roblox title, visits, and CCU every 10 minutes, then publishes the safe static snapshot used by the Games page. It does not use or expose an API key.

## Add a game

Paste its Universe ID into `assets/data/portfolio.json`. JSON does **not** allow a comma after the final list item:

```json
"universeIds": [
  10420582875,
  1234567890
]
```

Pushing a change to this file immediately runs the portfolio refresh workflow, so the published site will receive the game title, thumbnail, visits, and latest CCU automatically.
