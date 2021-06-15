import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function PdfGenerator() {
    const doc: any = new jsPDF();
    const tableColumn: any = ['Name', 'Phone Number', 'Address', 'Amount']
    const tableRows: any = []
    const ticketData: any = [
        'Sanjith Sivapuram',
        '9602201838',
        'Hyderabad',
        '5000'
    ];
    tableRows.push(ticketData);
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Closed tickets within the last one month.", 14, 15);
    doc.save('sample.pdf');
}