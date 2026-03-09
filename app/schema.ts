import { PAYMENT_MODES, PRODUCT_CATEGORIES } from '@/constants';
import * as z from 'zod';

const PRODUCT_CATEGORY_VALUES = [...PRODUCT_CATEGORIES.map((category) => category.value), 'custom-sourcing'];
const PAYMENT_MODE_VALUES = PAYMENT_MODES.map((mode) => mode.value);
const toTrimmedString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export const ProductCategorySchema = z.preprocess(
    toTrimmedString,
    z.string().min(1, 'Product Category is required').refine((value) => PRODUCT_CATEGORY_VALUES.includes(value), 'Invalid product category selected')
);

export const PaymentModeSchema = z.preprocess(
    toTrimmedString,
    z.string().min(1, 'Payment Mode is required').refine((value) => PAYMENT_MODE_VALUES.includes(value), 'Invalid payment mode selected')
);

export type ProductCategory = z.infer<typeof ProductCategorySchema>;

export const RFQSchema = z.object({
    companyName: z.preprocess(
        toTrimmedString,
        z.string().min(1, 'Company Name is required').min(3, 'Invalid Company Name').max(100, 'Company Name too long')
    ),
    country: z.preprocess(
        toTrimmedString,
        z.string().min(1, 'Country is required').min(3, 'Invalid Country').max(100, 'Country name too long')
    ),
    productCategory: ProductCategorySchema,
    quantity: z.preprocess(
        toTrimmedString,
        z
            .string()
            .min(1, 'Quantity is required')
            .refine((value) => !Number.isNaN(Number(value)), 'Quantity must be a valid number')
            .transform((value) => Number(value))
            .pipe(z.number().positive('Quantity must be a positive number'))
    ),
    productSpecifications: z.preprocess(
        toTrimmedString,
        z
            .string()
            .min(1, 'Product specifications are required')
            .min(3, 'Please provide product specifications')
            .max(5000, 'Product specifications too long')
    ),
    paymentMode: PaymentModeSchema,
    businessEmail: z.preprocess(
        toTrimmedString,
        z.string().min(1, 'Business Email is required').email('Invalid email address')
    ),
    whatsapp: z.preprocess(
        toTrimmedString,
        z
            .string()
            .min(1, 'Whatsapp Number is required')
            .min(6, 'Invalid Whatsapp Number')
            .max(30, 'Whatsapp Number too long')
    ),
});
