import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const json = req.json();
    const { pdf, userEmail } = await json;
    console.log(pdf, userEmail);

    // console.log("formDataPdf", formDataPdf);

    // const { files } = await parseForm(formDataPdf);
    // console.log(files);
    // const { file } = files;
    // const pdfFile = fs.readFileSync(file?.filepath);
    // console.log(pdfFile);
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [userEmail],
      subject: "Hello world",
      text: "Hello world",
      react: <p>Hello</p>,
      attachments: [
        {
          filename: "document.pdf",
          content: pdf.toString("base64"),
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    });

    console.log("resend data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
