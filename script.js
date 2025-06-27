const qrResult = document.getElementById("result");
const fileInput = document.getElementById("qr-input-file");

fileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const html5QrCode = new Html5Qrcode("reader");

  try {
    const decodedText = await html5QrCode.scanFile(file, true);
    qrResult.textContent = `✅ Scanned: ${decodedText}`;
  } catch (err) {
    qrResult.textContent = `❌ QR Code not found in the image.`;
  }
});
