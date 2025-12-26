Write-Host "Starting Portfolio Website Server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio is available at: http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
python -m http.server 8000

