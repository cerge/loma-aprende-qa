# Loma Aprende - Simulador Chaos QA

## Uso
1. Abrir `index.html` directamente, o ejecutar un servidor local: `python -m http.server 8080`.
2. Navegar a Administración > Administrar Encuestas Generales.
3. Crear, editar, borrar, buscar y responder encuestas.
4. Activar `Chaos QA` para datos extremos, duplicación, red simulada, sesión vencida y carga masiva.

## Automatización
Los controles incluyen `data-testid` para Playwright/Selenium. Los datos se guardan en LocalStorage. No hay conexión con sistemas reales.
