document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    function changeBackgroundColor() {
        const randomColor = getRandomColor();
        
        document.body.style.backgroundColor = randomColor;
        
        colorDisplay.style.backgroundColor = randomColor;
        colorCode.textContent = randomColor;
    }
    button.addEventListener('click', changeBackgroundColor);
});