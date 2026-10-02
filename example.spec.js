import { test, expect } from '@playwright/test';

test('crear encuesta en modo normal', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await page.getByTestId('administration').click();
  await page.getByTestId('manage-surveys').click();
  await page.getByTestId('create-survey').click();
  await page.getByTestId('survey-title').fill('Encuesta Playwright');
  await page.getByTestId('survey-description').fill('Prueba automática');
  await page.getByTestId('question-1').fill('¿Funciona?');
  await page.getByTestId('options-1').fill('Sí;No');
  await page.getByTestId('submit-survey').click();
  await expect(page.getByText('Encuesta creada con éxito. Descargue QR.')).toBeVisible();
});
