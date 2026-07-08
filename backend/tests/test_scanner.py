from app.scanner import Scanner


scanner = Scanner()

results = scanner.run()

assert len(results) > 0