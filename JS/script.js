        document.getElementById('convertBtn').addEventListener('click', function() {
            // Get the RGB input values
            let red = parseInt(document.getElementById('redInput').value);
            let green = parseInt(document.getElementById('greenInput').value);
            let blue = parseInt(document.getElementById('blueInput').value);

            // Check if the input values are valid
            if (isNaN(red) || isNaN(green) || isNaN(blue) || red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
                alert('Invalid RGB values. Please enter values between 0 and 255.');
                return;
            }

            // Convert RGB to Hex
            let hex = rgbToHex(red, green, blue);

            // Display the result
            document.getElementById('result').textContent = `Hex: ${hex}`;
        });

        function rgbToHex(red, green, blue) {
            // Ensure values are within the valid range
            red = Math.min(255, Math.max(0, red));
            green = Math.min(255, Math.max(0, green));
            blue = Math.min(255, Math.max(0, blue));

            // Convert to hexadecimal and concatenate
            let hex = ((red << 16) | (green << 8) | blue).toString(16).toUpperCase();

            // Ensure the leading zeros are included if needed
            while (hex.length < 6) {
                hex = '0' + hex;
            }

            return '#' + hex;
        }