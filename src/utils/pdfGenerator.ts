import jsPDF from 'jspdf';
import { OrderData } from '@/types';

export function generateOrderPDF(orderData: OrderData): Blob {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.text('Fresh Market - Order Receipt', 20, 20);
  doc.text('ఫ్రెష్ మార్కెట్ - ఆర్డర్ రశీదు', 20, 30);
  
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
  
  // Table Headers
  doc.setFontSize(10);
  doc.text('Product', 20, 145);
  doc.text('Qty', 120, 145);
  doc.text('Price', 140, 145);
  doc.text('Total', 170, 145);
  
  // Draw line under headers
  doc.line(20, 148, 190, 148);
  
  // Items
  let yPosition = 160;
  orderData.items.forEach((item, index) => {
    doc.text(`${item.nameEn} (${item.nameTe})`, 20, yPosition);
    doc.text(`${item.quantity} ${item.unit}`, 120, yPosition);
    doc.text(`₹${item.price}`, 140, yPosition);
    doc.text(`₹${item.price * item.quantity}`, 170, yPosition);
    yPosition += 10;
  });
  
  // Total
  doc.line(20, yPosition, 190, yPosition);
  yPosition += 10;
  doc.setFontSize(12);
  doc.text(`Total Amount: ₹${orderData.total}`, 120, yPosition);
  
  // Footer
  yPosition += 30;
  doc.setFontSize(10);
  doc.text('Thank you for shopping with Fresh Market!', 20, yPosition);
  doc.text('ఫ్రెష్ మార్కెట్‌తో కొనుగోలు చేసినందుకు ధన్యవాదాలు!', 20, yPosition + 10);
  
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