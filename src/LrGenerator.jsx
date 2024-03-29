import React, { useRef } from 'react';
import { Button } from '@mui/material';
import whitelr from './assets/whitelr.png'
const LrGenerator = () => {
    const canvasRef = useRef(null);

    const generateImage = ({lrNo}) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clear previous content
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw template image
        const templateImage = new Image();
        templateImage.src=whitelr;
        console.log(templateImage)
        templateImage.onload = () => {
            ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

            // Insert form details
            ctx.font = '20px Arial';
            ctx.fillStyle = 'black';
            ctx.fillText(lrNo, 50, 150);
            // Insert other form details as needed

            // Convert canvas content to image
            const generatedImage = new Image();
            generatedImage.src = canvas.toDataURL('image/png');

            // Display the generated image within the component
            const imageContainer = document.getElementById('generated-image');
            imageContainer.appendChild(generatedImage);
        };
    };

    return (
        <div style={{border:"4px solid black",margin:"0% 18% 0% 17%"}}>
            <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid black', margin: '0% 0% 0% 15%', display: 'none' }} />
            <Button variant="contained" onClick={generateImage}>Generate Image</Button>
            <div id="generated-image"></div>
        </div>
    );
};

export default LrGenerator;
