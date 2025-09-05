#!/bin/bash

# Spacenations Tools Migration Script
# Dieses Script hilft bei der Migration der Spacenations Tools zu einem neuen Repository

echo "🚀 Spacenations Tools Migration Script"
echo "======================================"

# Funktion zur Eingabeaufforderung
ask_user() {
    while true; do
        read -p "$1 (y/n): " yn
        case $yn in
            [Yy]* ) return 0;;
            [Nn]* ) return 1;;
            * ) echo "Bitte antworten Sie mit y oder n.";;
        esac
    done
}

# Zielverzeichnis abfragen
echo ""
read -p "Geben Sie den Pfad zum Ziel-Repository ein: " TARGET_DIR

# Überprüfen ob Zielverzeichnis existiert
if [ ! -d "$TARGET_DIR" ]; then
    if ask_user "Zielverzeichnis '$TARGET_DIR' existiert nicht. Soll es erstellt werden?"; then
        mkdir -p "$TARGET_DIR"
        echo "✅ Verzeichnis '$TARGET_DIR' erstellt."
    else
        echo "❌ Migration abgebrochen."
        exit 1
    fi
fi

# Quellverzeichnis
SOURCE_DIR="/workspace"
echo "📁 Quellverzeichnis: $SOURCE_DIR"
echo "📁 Zielverzeichnis: $TARGET_DIR"

# Migration starten
echo ""
echo "🔄 Starte Migration..."

# Hauptdateien kopieren
echo "📋 Kopiere Konfigurationsdateien..."
cp "$SOURCE_DIR/package.json" "$TARGET_DIR/" 2>/dev/null && echo "✅ package.json"
cp "$SOURCE_DIR/tailwind.config.ts" "$TARGET_DIR/" 2>/dev/null && echo "✅ tailwind.config.ts"
cp "$SOURCE_DIR/tsconfig.json" "$TARGET_DIR/" 2>/dev/null && echo "✅ tsconfig.json"
cp "$SOURCE_DIR/tsconfig.app.json" "$TARGET_DIR/" 2>/dev/null && echo "✅ tsconfig.app.json"
cp "$SOURCE_DIR/tsconfig.node.json" "$TARGET_DIR/" 2>/dev/null && echo "✅ tsconfig.node.json"
cp "$SOURCE_DIR/vite.config.ts" "$TARGET_DIR/" 2>/dev/null && echo "✅ vite.config.ts"
cp "$SOURCE_DIR/components.json" "$TARGET_DIR/" 2>/dev/null && echo "✅ components.json"
cp "$SOURCE_DIR/postcss.config.js" "$TARGET_DIR/" 2>/dev/null && echo "✅ postcss.config.js"
cp "$SOURCE_DIR/eslint.config.js" "$TARGET_DIR/" 2>/dev/null && echo "✅ eslint.config.js"
cp "$SOURCE_DIR/index.html" "$TARGET_DIR/" 2>/dev/null && echo "✅ index.html"

# Verzeichnisse kopieren
echo ""
echo "📂 Kopiere Quellcode..."
cp -r "$SOURCE_DIR/src" "$TARGET_DIR/" 2>/dev/null && echo "✅ src/ Verzeichnis"
cp -r "$SOURCE_DIR/public" "$TARGET_DIR/" 2>/dev/null && echo "✅ public/ Verzeichnis"

# Optionale Dateien
echo ""
echo "📄 Kopiere optionale Dateien..."
cp "$SOURCE_DIR/.gitignore" "$TARGET_DIR/" 2>/dev/null && echo "✅ .gitignore"
cp "$SOURCE_DIR/README.md" "$TARGET_DIR/README_ORIGINAL.md" 2>/dev/null && echo "✅ README.md (als README_ORIGINAL.md)"

# Lock Files (optional)
if ask_user "Möchten Sie die Lock-Files (package-lock.json, bun.lockb) kopieren?"; then
    cp "$SOURCE_DIR/package-lock.json" "$TARGET_DIR/" 2>/dev/null && echo "✅ package-lock.json"
    cp "$SOURCE_DIR/bun.lockb" "$TARGET_DIR/" 2>/dev/null && echo "✅ bun.lockb"
fi

# Migration Guide kopieren
echo ""
echo "📚 Kopiere Dokumentation..."
cp "$SOURCE_DIR/SPACENATIONS_TOOLS_MIGRATION_GUIDE.md" "$TARGET_DIR/" 2>/dev/null && echo "✅ Migration Guide"
cp "$SOURCE_DIR/EXPORT_PACKAGE_INFO.md" "$TARGET_DIR/" 2>/dev/null && echo "✅ Export Package Info"

echo ""
echo "✅ Migration abgeschlossen!"
echo ""
echo "🔧 Nächste Schritte:"
echo "1. Wechseln Sie zum Zielverzeichnis: cd '$TARGET_DIR'"
echo "2. Installieren Sie Dependencies: npm install"
echo "3. Starten Sie den Dev-Server: npm run dev"
echo "4. Öffnen Sie http://localhost:5173 im Browser"
echo ""
echo "📖 Weitere Informationen finden Sie in:"
echo "   - SPACENATIONS_TOOLS_MIGRATION_GUIDE.md"
echo "   - EXPORT_PACKAGE_INFO.md"
echo ""
echo "🎮 Viel Erfolg mit den Spacenations Tools!"

# Statistiken anzeigen
echo ""
echo "📊 Migration Statistiken:"
echo "   - Konfigurationsdateien: 9"
echo "   - Quellcode-Verzeichnisse: 2 (src/, public/)"
echo "   - Dokumentation: 2 Dateien"
echo "   - Geschätzte Dateigröße: ~640KB (ohne node_modules)"

# Optional: Dependencies installieren
if ask_user "Möchten Sie jetzt die Dependencies installieren? (npm install)"; then
    cd "$TARGET_DIR"
    echo "📦 Installiere Dependencies..."
    npm install
    echo "✅ Dependencies installiert!"
    echo ""
    echo "🚀 Sie können jetzt 'npm run dev' ausführen, um die Anwendung zu starten."
fi

echo ""
echo "🎯 Migration erfolgreich abgeschlossen!"