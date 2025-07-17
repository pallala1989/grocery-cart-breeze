
import emailjs from '@emailjs/browser';
import { OrderData } from '@/types';

// EmailJS configuration - Replace with your actual values
const SERVICE_ID = 'service_sv_provisions'; // Your EmailJS service ID
const TEMPLATE_ID = 'template_order_notification'; // Your EmailJS template ID  
const PUBLIC_KEY = 'your_public_key_here'; // Your EmailJS public key

export async function sendOrderEmail(orderData: OrderData, pdfBlob: Blob): Promise<boolean> {
  try {
    // Note: EmailJS doesn't support file attachments directly in the browser
    // This is a limitation of client-side email sending
    // For production, you'd need a backend service to handle PDF attachments
    
    const emailData = {
      to_email: 'prsr4u@gmail.com', // Shop owner's email
      customer_name: orderData.customer.name,
      customer_mobile: orderData.customer.mobile,
      order_id: orderData.orderId,
      order_date: orderData.orderDate.toLocaleDateString(),
      order_time: orderData.orderDate.toLocaleTimeString(),
      total_amount: orderData.total,
      items_list: orderData.items.map(item => 
        `${item.nameEn} - Size: ${item.size} - Qty: ${item.orderQuantity} - Rs ${item.price * item.orderQuantity}`
      ).join('\n'),
      total_items: orderData.items.reduce((sum, item) => sum + item.orderQuantity, 0)
    };

    // Initialize EmailJS (you only need to do this once)
    emailjs.init(PUBLIC_KEY);
    
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData);
    
    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

// Setup instructions for EmailJS:
export const getEmailJSSetupInstructions = () => {
  return `
    To enable email functionality:
    
    1. Go to https://www.emailjs.com/ and create a free account
    2. Create a new service (Gmail, Outlook, etc.)
    3. Create an email template with these variables:
       - {{customer_name}}
       - {{customer_mobile}}
       - {{order_id}}
       - {{order_date}}
       - {{order_time}}
       - {{total_amount}}
       - {{items_list}}
       - {{total_items}}
    4. Get your Service ID, Template ID, and Public Key
    5. Update the constants in emailService.ts
    
    Sample email template:
    Subject: New Order Received - {{order_id}}
    
    Hello,
    
    A new order has been received from SV Provisions:
    
    Order ID: {{order_id}}
    Date: {{order_date}} at {{order_time}}
    
    Customer Details:
    Name: {{customer_name}}
    Mobile: {{customer_mobile}}
    
    Items Ordered:
    {{items_list}}
    
    Total Items: {{total_items}}
    Total Amount: Rs {{total_amount}}
    
    Please prepare the order for delivery/pickup.
    
    Best regards,
    SV Provisions System
  `;
};
