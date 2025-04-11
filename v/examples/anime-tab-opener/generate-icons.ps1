# PowerShell script to generate icon files for Chrome extension
# This creates simple colored square icons with sizes 16x16, 48x48, and 128x128

$iconFolder = "$PSScriptRoot\icons"

# Function to generate a simple PNG icon
function Generate-Icon {
    param (
        [int]$size,
        [string]$outputPath
    )
    
    # Create a new bitmap
    Add-Type -AssemblyName System.Drawing
    $bitmap = New-Object System.Drawing.Bitmap($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    # Fill with a violet color
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(107, 70, 193))
    $graphics.FillRectangle($brush, 0, 0, $size, $size)
    
    # Add a simple play icon in white
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $centerX = $size / 2
    $centerY = $size / 2
    $triangleSize = $size * 0.4
    
    $points = @(
        [System.Drawing.Point]::new($centerX + $triangleSize * 0.5, $centerY),
        [System.Drawing.Point]::new($centerX - $triangleSize * 0.25, $centerY - $triangleSize * 0.4),
        [System.Drawing.Point]::new($centerX - $triangleSize * 0.25, $centerY + $triangleSize * 0.4)
    )
    
    $graphics.FillPolygon($whiteBrush, $points)
    
    # Save to file
    $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    # Clean up
    $graphics.Dispose()
    $bitmap.Dispose()
    $brush.Dispose()
    $whiteBrush.Dispose()
    
    Write-Host "Created icon: $outputPath"
}

# Generate icons in different sizes
Generate-Icon -size 16 -outputPath "$iconFolder\icon16.png"
Generate-Icon -size 48 -outputPath "$iconFolder\icon48.png"
Generate-Icon -size 128 -outputPath "$iconFolder\icon128.png"

Write-Host "All icons have been generated!"
