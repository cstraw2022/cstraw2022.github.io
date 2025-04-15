@echo off
setlocal enabledelayedexpansion

for %%f in (*.mp4) do (
    set "filename=%%~nf"
    ffmpeg -i "%%f" -vcodec libwebp -filter:v fps=60 -lossless 0 -compression_level 6 -q:v 65 -loop 0 -preset default "!filename!.webp"
)

echo Done converting all MP4 files to WebP!
pause
