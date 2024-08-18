"use client";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef, useState } from "react";
// for pdf
import InvoicePdf from "./InvoicePdf";

// for email
import { Resend } from "resend";

export default function GeneratePdf({ allproduct, userEmail }) {
  const [download, setDownload] = useState();
  const [generatedpdf, setGeneratedPdf] = useState();
  const invoicePdfRef = useRef(null);

  // for send email>
  const resend = new Resend("re_QY7GTuBT_85xiDixxqL9xe6Yd7nwRCFUF");

  const handelEmailSend = (pdf) => {
    console.log(pdf);
  };

  //   for pdf generation
  // const handelGeneratePdf = async () => {
  //   const inputData = invoicePdfRef.current;
  //   try {
  //     const canvas = await html2canvas(inputData);
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     // const pdf = new jsPDF({
  //     //   orientation: "landscape",
  //     //   unit: "px",
  //     //   format: "a4",
  //     // });
  //     const width = pdf.internal.pageSize.getWidth();
  //     const height = (canvas.height * width) / canvas.width;
  //     pdf.addImage(imgData, "PNG", 0, 0, width, height);
  //     // pdf.save("Invoice.pdf");
  //     // send pdf
  //     const pdfBlob = await pdf.output("blob");
  //     const formDataPdf = new FormData();
  //     formDataPdf.append("file", pdfBlob, "document.pdf");

  //     console.log(formDataPdf);
  //     const res = await fetch("/api/auth/send_emal", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ formDataPdf: pdf }),
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // new versition
  const handelGeneratePdf = async () => {
    const inputData = invoicePdfRef.current;
    try {
      const canvas = await html2canvas(inputData);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width - 100;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      const pdfBlob = await pdf.output("blob");
      pdf.save("Invoice.pdf");
      // const formData = new FormData();
      // formData.append("file", pdfBlob, "document.pdf");

      const res = await fetch("/api/auth/send_emal", {
        method: "POST",
        body: JSON.stringify({ pdf, userEmail }),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={() => handelGeneratePdf()}
        className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
      >
        Check Our And Download Invoice
      </button>
      <div ref={invoicePdfRef}>
        <InvoicePdf allproduct={allproduct} />
      </div>
    </>
  );
}
