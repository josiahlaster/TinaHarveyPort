from pathlib import Path
path = Path('src/components/Hero.css')
text = path.read_text(encoding='utf-8')
old = ".profile-frame {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #fffaf2 0%, #f4e8d9 60%, #e8dac0 100%);\n  border: 3px solid rgba(212, 175, 55, 0.9);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);\n}\n"
new = ".profile-frame {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ac9883;\n  border: 3px solid rgba(212, 175, 55, 0.9);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);\n}\n"
if old not in text:
    raise SystemExit('Old block not found')
path.write_text(text.replace(old, new), encoding='utf-8')
print('updated')
