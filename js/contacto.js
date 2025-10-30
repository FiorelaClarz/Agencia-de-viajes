document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.');
            
            form.reset(); 
        });
    });