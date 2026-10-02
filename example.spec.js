import { test, expect } from '@playwright/test';
test('guarda una encuesta local', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await page.getByTestId('title').fill('Encuesta automática');
  await page.getByTestId('description').fill('Guardado local');
  await page.getByTestId('question-1').fill('¿Funciona?');
  await page.getByTestId('options-1').fill('Sí;No');
  await page.getByTestId('save').click();
  await expect(page.getByText('Guardado localmente en este navegador')).toBeVisible();
  await page.reload();
  await expect(page.getByText('Encuesta automática')).toBeVisible();
});