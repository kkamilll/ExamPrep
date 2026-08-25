const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { exec } = require('child_process');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.rar': 'application/x-rar-compressed',
  '.7z': 'application/x-7z-compressed',
  '.sql': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.php': 'text/plain; charset=utf-8',
  '.scss': 'text/plain; charset=utf-8',
  '.map': 'application/json; charset=utf-8'
};

const BASE_DIR = __dirname;

function getSafeFilePath(requestUrlPath) {
  let decodedPath = decodeURIComponent(requestUrlPath.split('?')[0]);
  if (decodedPath === '/' || decodedPath === '') {
    decodedPath = '/index.html';
  }
  // Sanitize path to prevent directory traversal
  const safeRelative = path.normalize(decodedPath).replace(/^(\.\.[\/\\])+/, '');
  return path.join(BASE_DIR, safeRelative);
}

function serveStatic(req, res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>404 - Nie znaleziono pliku</h1><p>${path.relative(BASE_DIR, filePath)}</p>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const isAttachment = ['.zip', '.rar', '.7z'].includes(ext);

    const headers = {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    };

    if (isAttachment) {
      headers['Content-Disposition'] = `attachment; filename="${path.basename(filePath)}"`;
    }

    res.writeHead(200, headers);
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

function handleApiSource(req, res, query) {
  const fileRel = query.file;
  if (!fileRel) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Brak parametru file' }));
    return;
  }

  const safePath = path.normalize(fileRel).replace(/^(\.\.[\/\\])+/, '');
  const fullPath = path.join(BASE_DIR, safePath);

  fs.readFile(fullPath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Nie udało się odczytać pliku: ' + err.message }));
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({
      path: safePath,
      name: path.basename(fullPath),
      ext: ext.replace('.', ''),
      content: data
    }));
  });
}

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = reqUrl.pathname;

  // API endpoints
  if (pathname === '/api/source') {
    const query = Object.fromEntries(reqUrl.searchParams.entries());
    handleApiSource(req, res, query);
    return;
  }

  if (pathname === '/api/data') {
    const manifestPath = path.join(BASE_DIR, 'manifest.json');
    serveStatic(req, res, manifestPath);
    return;
  }

  // Static file serving
  const targetFile = getSafeFilePath(pathname);
  serveStatic(req, res, targetFile);
});

function openBrowser(targetUrl) {
  const platform = process.platform;
  let cmd = '';
  if (platform === 'win32') {
    cmd = `start "" "${targetUrl}"`;
  } else if (platform === 'darwin') {
    cmd = `open "${targetUrl}"`;
  } else {
    cmd = `xdg-open "${targetUrl}"`;
  }
  exec(cmd, () => {});
}

function startServer(port = 3000) {
  server.listen(port, () => {
    const serverUrl = `http://localhost:${port}`;
    console.log('\n======================================================');
    console.log('  🎓 Exam Prep Dashboard (INF.03 / E.14 / EE.09)');
    console.log('======================================================');
    console.log(`  🌐 Serwer działa pod adresem: \x1b[36m${serverUrl}\x1b[0m`);
    console.log(`  📂 Katalog roboczy:           ${BASE_DIR}`);
    console.log('======================================================');
    console.log('  Naciśnij Ctrl+C, aby zatrzymać serwer.\n');

    // Auto-open browser on first run unless --no-open flag passed
    if (!process.argv.includes('--no-open')) {
      openBrowser(serverUrl);
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} jest zajęty, próba uruchomienia na porcie ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Błąd serwera:', err);
    }
  });
}

startServer(Number(process.env.PORT) || 3000);
