'use client';

import { submitRFQ } from '@/app/actions';
import SelectInputField from '@/components/form-fields/SelectInputField';
import TextInputField from '@/components/form-fields/TextInputField';
import TextareaInputField from '@/components/form-fields/TextareaInputField';
import { PAYMENT_MODES, PRODUCT_CATEGORIES } from '@/constants';
import { useActionState } from 'react';

interface RFQFormProps {
  className?: string;
}

type RFQFormState = {
  success: boolean;
  message: string;
  issues: {
    path: string;
    message: string;
  }[];
};

const initialState: RFQFormState = {
  success: false,
  message: '',
  issues: [],
};

const productOptions = [
  ...PRODUCT_CATEGORIES.map(category => ({ value: category.value, label: category.name })),
  { value: 'custom-sourcing', label: 'Custom Sourcing' },
];

const paymentModes = PAYMENT_MODES.map(mode => ({ value: mode.value, label: mode.label }));

export default function RFQForm({ className = '' }: RFQFormProps) {
  const [state, formAction, isPending] = useActionState<RFQFormState, FormData>(submitRFQ, initialState);

  const getFieldError = (fieldName: string) => state.issues.find((issue) => issue.path === fieldName)?.message;

  return (
    <form className={className} action={formAction} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextInputField
          id="companyName"
          name="companyName"
          label="Company Name"
          placeholder="Your Company Name"
          required
          error={getFieldError('companyName')}
        />
        <TextInputField
          id="country"
          name="country"
          label="Country"
          placeholder="Your Country"
          required
          error={getFieldError('country')}
        />

        <SelectInputField
          id="productCategory"
          name="productCategory"
          label="Product Category"
          placeholder="Select Product"
          options={productOptions}
          required
          error={getFieldError('productCategory')}
        />
        <TextInputField
          id="quantity"
          name="quantity"
          label="Quantity / Volume"
          placeholder="e.g. 500 units / 1 MT"
          required
          error={getFieldError('quantity')}
        />

        <div className="md:col-span-2">
          <TextareaInputField
            id="productSpecifications"
            name="productSpecifications"
            label="Product Specifications"
            placeholder="Describe your product requirements, grade, certification needs, packaging preferences, etc."
            required
            error={getFieldError('productSpecifications')}
          />
        </div>

        <SelectInputField
          id="paymentMode"
          name="paymentMode"
          label="Payment Mode"
          placeholder="Select Payment Mode"
          options={paymentModes}
          required
          error={getFieldError('paymentMode')}
        />
        <TextInputField
          id="businessEmail"
          name="businessEmail"
          type="email"
          label="Business Email"
          placeholder="your@company.com"
          required
          error={getFieldError('businessEmail')}
        />

        <div className="md:col-span-2">
          <TextInputField
            id="whatsapp"
            name="whatsapp"
            type="tel"
            label="Whatsapp Number"
            placeholder="+Country Code + Number"
            required
            error={getFieldError('whatsapp')}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={isPending}
          className={`cursor-pointer inline-flex items-center justify-center w-full sm:w-auto min-w-[260px] bg-primary text-white px-7 h-11 text-sm font-semibold hover:bg-primary-hover transition-colors ${
            isPending ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {isPending ? 'Submitting...' : 'Submit Request for Quotation'}
        </button>
        <p className="text-xs text-slate-500 font-body">
          Response within 24 business hours. All information is kept confidential.
        </p>
      </div>
      {state.message ? (
        <div
          role="status"
          className={`mt-4 flex gap-3 border px-4 py-3 text-sm items-center ${
            state.success
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-rose-200 bg-rose-50 text-rose-700'
          }`}
        >
          <span
            className={`mt-0.5 inline-flex h-2.5 w-2.5 rounded-full ${
              state.success ? 'bg-emerald-500' : 'bg-rose-500'
            }`}
            aria-hidden="true"
          ></span>
          <p className="font-body">{state.message}</p>
        </div>
      ) : null}
    </form>
  );
}
