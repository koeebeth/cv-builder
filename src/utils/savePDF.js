import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function savePDF (divId) {
    const div = document.getElementById(divId);
    html2canvas(div).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const imgWidth = doc.internal.pageSize.getWidth()
      const imgHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
      doc.save()
    })
  }