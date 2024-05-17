#!/bin/bash

# Specify the directory containing your JPG images
input_dir="/home/anzelika/workspace/klijenti/padina-komerc/padina-komerc2 (nokatalog)/public/images/visenamenski_namestaj/kuhinjske_vitrine"

# Specify the directory where you want to save the converted WebP images
output_dir="/home/anzelika/dashboard"


find "$input_dir" -type f -name "*.jpg" | while IFS= read -r file; do
    # Get the filename without the extension
    filename=$(basename "$file" .jpg)

    # Convert the JPG image to WebP format
    cwebp -q 40 "$file" -o "$output_dir/$filename.webp"

    # Print status message
    echo "Converted $file to $output_dir/$filename.webp"
done


# the following two commands are executed in a terminal opened from the folder where the script is located

#  Make the script executable by running:
# chmod +x convert_to_webp.sh

# Finally, execute the script:
# ./convert_to_webp.sh