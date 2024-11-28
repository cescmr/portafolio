document.addEventListener('DOMContentLoaded', () => {
  const githubUsername = 'cescmr';  // Tu nombre de usuario de GitHub
  const repoName = 'cesc_itb2425_mds';  // Nombre del repositorio
  const filePath = 'TA02/comprovarEdat.py';  // Archivo que deseas mostrar
  const projectContainer = document.getElementById('github-project1');

  // URL de la API de GitHub para obtener el contenido del archivo
  const fileUrl = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}`;

  fetch(fileUrl)
      .then(response => response.json())
      .then(data => {
          // Verifica si el archivo no fue encontrado
          if (data.message === "Not Found") {
              projectContainer.innerHTML = `<p>Archivo no encontrado.</p>`;
              return;
          }

          // Descomprimir el contenido del archivo (codificado en base64)
          const content = atob(data.content); // "atob" descifra base64

          // Genera el HTML para mostrar el contenido
          const fileInfo = `
              <h4>Contenido de ${filePath}</h4>
              <pre>${content}</pre> <!-- Muestra el código en un formato legible -->
          `;
          projectContainer.innerHTML = fileInfo;
      })
      .catch(error => {
          console.error('Error al cargar el archivo:', error);
          projectContainer.innerHTML = `<p>Error al cargar el archivo.</p>`;
      });
});
