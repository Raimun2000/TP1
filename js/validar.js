document.getElementById('formulario').addEventListener('submit', function(event) {
      var empresa = document.getElementById('empresa').value;
      var contacto = document.getElementById('contacto').value;
      var email = document.getElementById('email').value;
      var mensaje = document.getElementById('mensaje').value;

      // Verificar si los campos requeridos están llenos
      if (!empresa) {
            mostrarMensaje('Por favor, complete el campo "Empresa"');
            event.preventDefault(); // Evitar que se envíe el formulario
            return;
        }

        if (!contacto) {
            mostrarMensaje('Por favor, complete el campo "Contacto"');
            event.preventDefault(); // Evitar que se envíe el formulario
            return;
        }

        if (!email) {
            mostrarMensaje('Por favor, complete el campo "Email"');
            event.preventDefault(); // Evitar que se envíe el formulario
            return;
        }

        if (!mensaje) {
            mostrarMensaje('Por favor, complete el campo "Mensaje"');
            event.preventDefault(); // Evitar que se envíe el formulario
            return;
        }

      // Verificar si el formato del correo electrónico es válido
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          mostrarMensaje('Por favor, ingrese un correo electrónico válido.');
          event.preventDefault(); // Evitar que se envíe el formulario
          return;
      }

      // Si todos los campos son válidos, el formulario se enviará normalmente
  });

  function mostrarMensaje(mensaje) {
      var mensajeError = document.getElementById('mensajeError');
      mensajeError.textContent = mensaje;
      mensajeError.style.display = 'block';

      setTimeout(function() {
          mensajeError.style.display = 'none';
      }, 3000); // Ocultar el mensaje después de 3 segundos
  }

/*
document.getElementById('formulario').addEventListener('submit', function(event) {
      var empresa = document.getElementById('empresa').value;
      var contacto = document.getElementById('contacto').value;
      var email = document.getElementById('email').value;
      var mensaje = document.getElementById('mensaje').value;

      // Verificar si los campos requeridos están llenos
      if (!empresa || !contacto || !email || !mensaje) {
          alert('Por favor, complete todos los campos.');
          event.preventDefault(); // Evitar que se envíe el formulario
          return;
      }

      // Verificar si el formato del correo electrónico es válido
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Por favor, ingrese un correo electrónico válido.');
          event.preventDefault(); // Evitar que se envíe el formulario
          return;
      }

      // Si todos los campos son válidos, el formulario se enviará normalmente
  });
  */