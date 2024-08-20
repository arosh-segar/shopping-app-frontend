import { z } from "zod";

export const paymentSchema = z.object({
  cardNumber: z.string().min(1, "Card number is required"),
  expiryDate: z
    .string()
    .min(1, "Expiry date is required")
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date format"),
  cvv: z.string().min(1, "CVV is required").length(3, "CVV must be 3 digits"),
});

export const shippingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});
