const pixKey = "pedrolucas.fva@gmail.com";
const copyButton = document.getElementById("copy-button");
const copyStatus = document.getElementById("copy-status");
const qrImage = document.getElementById("qr-image");
const qrFallback = document.getElementById("qr-fallback");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pixKey);
    copyButton.innerHTML = 'CHAVE COPIADA! <span>✓</span>';
    copyStatus.textContent = "Agora cole a chave no aplicativo do seu banco e confira os dados do destinatário.";
    setTimeout(() => copyButton.innerHTML = 'COPIAR CHAVE PIX <span>▣</span>', 2500);
  } catch {
    copyStatus.textContent = "Não foi possível copiar automaticamente. Selecione e copie a chave Pix exibida acima.";
  }
});

qrImage.addEventListener("load", () => {
  qrImage.style.display = "block";
  qrFallback.style.display = "none";
});
qrImage.addEventListener("error", () => {
  qrImage.style.display = "none";
  qrFallback.style.display = "flex";
});
