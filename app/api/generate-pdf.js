import { PDFDocument, rgb } from "pdf-lib";

export default async function handler(req, res) {
  try {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();

    // Add a new page
    const page = pdfDoc.addPage([600, 400]);

    // Set font size
    const fontSize = 30;

    // Draw a string of text toward the top of the page
    page.drawText("Creating PDFs in Next.js with pdf-lib!", {
      x: 50,
      y: 350,
      size: fontSize,
      color: rgb(0, 0.53, 0.71),
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Set the response header to indicate that this is a PDF file
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=example.pdf");

    // Send the PDF as the response
    res.status(200).send(pdfBytes);
  } catch (error) {
    console.error("Error creating PDF:", error);
    res.status(500).json({ error: "Error creating PDF" });
  }
}
