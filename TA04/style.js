// 1. Validación de Formulario
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    
    if (nombre == "" || email == "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }
    return true;
  }
  
  // 2. Desplazamiento Suave al Hacer Click en un Enlace
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 3. Mostrar/Ocultar Menú Desplegable
  function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  