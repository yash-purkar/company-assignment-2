import React from "react";
import "./PdfComponent";
import logo from "../../assets/nav_logo.png";
import "./pdfComponent.css";
import jsPDF from "jspdf";
import pdf_second_page from '../../assets/pdf_second_page.png'

export const PdfComponent = () => {
  const handlePrintDetails = () => {
    const pdf = new jsPDF("p", "mm", "a4");

    // adding company logo in pdf.
    pdf.addImage(logo, "PNG", 10, 10, 50, 50);

    // Define the initial Y-coordinate
    let yPos = 70;

    // Function to add text and increment Y-coordinate
    const addText = (text: string, x?: number, lineHeight = 10) => {
      if (!x || text === "\n") {
        yPos += lineHeight; // Increment Y-coordinate for line break
      } else {
        pdf.text(text, x, yPos);
        yPos += lineHeight; // Increment Y-coordinate
      }
    };

    // Adding data in pdf
    addText(`Program: ${"Program name"}`, 10);
    addText(`University Name: ${"Program name"}`, 10);

    // Adding line break
    addText("\n");

    // Student details
    addText(`Details of Student: `, 10);
    addText(`Student Name : ${"Student name"}`, 20);
    addText(`D.O.B : ${"D.O.B"}`, 20);
    addText(`Age : ${"Age"}`, 20);
    addText(`Location  : ${"Location "}`, 20);

    // Adding line break
    addText("\n");

    // Insurance details
    addText(`Insurance Details : `, 10);
    addText(`Plan Required as per university  : ${"Plan"}`, 20);
    addText(
      `University Insurance Cost   : ${"University Insurance Cost "}`,
      20
    );
    addText(`Details Actual Cost when Claim Hits   : ${"none"}`, 20);

    // Adding line break
    addText("\n");

    // Across Assist plans
    addText(`Across Assist Plan : `, 10);
    addText(`Health Insurance : ${"Selected"}`, 20);
    addText(`Travel Insurance : ${"Not Selected"}`, 20);
    addText(`Wellness Program : ${"Selected"}`, 20);


    pdf.addPage();

    // Add content to the second page
    // Add another image
    const pageSize = pdf.internal.pageSize;
    const pageWidth = pageSize.width;
    const pageHeight = pageSize.height;
    pdf.addImage(pdf_second_page, "PNG", 10, 10, pageHeight - 100,pageWidth - 100);

    // save the pdf to a blob (Binary Large OBject)
    const pdfBlob = pdf.output("blob");

    // create a url for the blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // open url in new window
    window.open(pdfUrl);

    // cleanup url object after opening new window. useful for memory management
    URL.revokeObjectURL(pdfUrl);

    // pdf.save("Across_Assist");
  };

  return (
    <div className="pdf_container">
      <button onClick={handlePrintDetails} className="print_button">
        Print
      </button>
    </div>
  );
};
