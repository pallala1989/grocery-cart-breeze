import jsPDF from 'jspdf';
import { OrderData } from '@/types';

export function generateOrderPDF(orderData: OrderData): Blob {
  const doc = new jsPDF();
  
  // Header with styling
  doc.setFillColor(76, 175, 80); // Green background
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255); // White text
  doc.setFontSize(24);
  doc.text('SV PROVISIONS', 105, 20, { align: 'center' });
  doc.setFontSize(16);
  doc.text('Order Receipt / ఆర్డర్ రశీదు', 105, 30, { align: 'center' });
  
  // Reset text color
  doc.setTextColor(0, 0, 0);
  
  // Order Info
  doc.setFontSize(12);
  doc.text(`Order ID: ${orderData.orderId}`, 20, 50);
  doc.text(`Date: ${orderData.orderDate.toLocaleDateString()}`, 20, 60);
  doc.text(`Time: ${orderData.orderDate.toLocaleTimeString()}`, 20, 70);
  
  // Customer Info
  doc.setFontSize(14);
  doc.text('Customer Details:', 20, 90);
  doc.setFontSize(12);
  doc.text(`Name: ${orderData.customer.name}`, 20, 100);
  doc.text(`Mobile: ${orderData.customer.mobile}`, 20, 110);
  
  // Items Header
  doc.setFontSize(14);
  doc.text('Items Ordered:', 20, 130);
  
  // Table Headers with background
  doc.setFillColor(230, 230, 230);
  doc.rect(15, 140, 180, 10, 'F');
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Product', 20, 147);
  doc.text('Size', 100, 147);
  doc.text('Qty', 120, 147);
  doc.text('Price', 140, 147);
  doc.text('Total', 170, 147);
  
  doc.setFont('helvetica', 'normal');
  
  // Draw line under headers
  doc.line(20, 148, 190, 148);
  
  // Items
  let yPosition = 160;
  orderData.items.forEach((item, index) => {
    // Alternate row background
    if (index % 2 === 0) {
      doc.setFillColor(245, 245, 245);
      doc.rect(15, yPosition - 5, 180, 10, 'F');
    }
    
    doc.setTextColor(0, 0, 0);
    doc.text(`${item.nameEn} (${item.nameTe})`, 20, yPosition);
    doc.text(`${item.quantity} ${item.unit}`, 100, yPosition);
    doc.text(`${item.orderQuantity}`, 120, yPosition);
    doc.text(`₹${item.price}`, 140, yPosition);
    doc.text(`₹${item.price * item.orderQuantity}`, 170, yPosition);
    yPosition += 10;
  });
  
  // Total
  doc.line(20, yPosition, 190, yPosition);
  yPosition += 10;
  doc.setFontSize(12);
  doc.text(`Total Amount: ₹${orderData.total}`, 120, yPosition);
  
  // Footer with styling
  yPosition += 20;
  doc.setFillColor(76, 175, 80);
  doc.rect(15, yPosition, 180, 25, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text('Thank you for shopping with SV Provisions!', 105, yPosition + 10, { align: 'center' });
  doc.setFontSize(10);
  doc.text('SV Provisions తో కొనుగోలు చేసినందుకు ధన్యవాదాలు!', 105, yPosition + 18, { align: 'center' });
  
  return doc.output('blob');
}

export function downloadPDF(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}