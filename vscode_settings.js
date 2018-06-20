{
  "editor.fontFamily": "Source Code Pro",
  "editor.renderLineHighlight": "none",
  "editor.renderWhitespace": "boundary",
  "editor.rulers": [80],
  "editor.scrollBeyondLastLine": false,
  "editor.tabSize": 2,
  "editor.tokenColorCustomizations": {
    "comments": "#666",
    "textMateRules": [
      { // JSDoc tokens
        "scope": [
          "comment storage.type",
          "comment variable"
        ],
        "settings": {
          "foreground": "#888"
        }
      },
      { // Type annotations in function params
        "scope": [
          "meta.parameters.ts meta.type.annotation.ts entity.name.type"
        ],
        "settings": {
          "foreground": "#5898ba"
        }
      }
    ]
  },
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "html.autoClosingTags": false,
  "html.suggest.ionic": false,
  "jsDocCompletion.enabled": false,
  "telemetry.enableTelemetry": false,
  "window.newWindowDimensions": "inherit",
  "workbench.colorCustomizations": {
    "editorBracketMatch.background": "#444c",
    "editorBracketMatch.border": "#222",
    "editorRuler.foreground": "#333",
    "editorWhitespace.foreground": "#333",
    "statusBar.background": "#333",
    "statusBarItem.hoverBackground": "#222"
  },
  "workbench.startupEditor": "none",
  "workbench.iconTheme": "seti",
  "workbench.statusBar.feedback.visible": false,
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "explorer.confirmDragAndDrop": false
}
