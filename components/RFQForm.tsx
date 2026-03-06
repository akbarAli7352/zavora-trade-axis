import SelectInputField from '@/components/form-fields/SelectInputField';
import TextInputField from '@/components/form-fields/TextInputField';
import TextareaInputField from '@/components/form-fields/TextareaInputField';

interface RFQFormProps {
  className?: string;
}

const productOptions = [
  { value: 'leather-products', label: 'Leather Products' },
  { value: 'handicrafts', label: 'Handicrafts' },
  { value: 'carpets', label: 'Carpets' },
  { value: 'pure-honey', label: 'Pure Honey' },
  { value: 'specialty-coffee', label: 'Specialty Coffee' },
  { value: 'custom-sourcing', label: 'Custom Sourcing' },
];

const paymentModes = [
  { value: 'lc', label: 'Letter of Credit (LC)' },
  { value: 'advance', label: 'Advance Payment' },
];

export default function RFQForm({ className = '' }: RFQFormProps) {
  return (
    <form className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextInputField
          id="companyName"
          name="companyName"
          label="Company Name"
          placeholder="Your Company Name"
          required
        />
        <TextInputField
          id="country"
          name="country"
          label="Country"
          placeholder="Your Country"
          required
        />

        <SelectInputField
          id="productCategory"
          name="productCategory"
          label="Product Category"
          placeholder="Select Product"
          options={productOptions}
          required
        />
        <TextInputField
          id="quantity"
          name="quantity"
          label="Quantity / Volume"
          placeholder="e.g. 500 units / 1 MT"
          required
        />

        <div className="md:col-span-2">
          <TextareaInputField
            id="productSpecifications"
            name="productSpecifications"
            label="Product Specifications"
            placeholder="Describe your product requirements, grade, certification needs, packaging preferences, etc."
            required
          />
        </div>

        <SelectInputField
          id="paymentMode"
          name="paymentMode"
          label="Payment Mode"
          placeholder="Select Payment Mode"
          options={paymentModes}
          required
        />
        <TextInputField
          id="businessEmail"
          name="businessEmail"
          type="email"
          label="Business Email"
          placeholder="your@company.com"
          required
        />

        <div className="md:col-span-2">
          <TextInputField
            id="whatsapp"
            name="whatsapp"
            type="tel"
            label="Whatsapp Number"
            placeholder="+Country Code + Number"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          className="bg-primary text-white px-7 h-11 text-sm font-semibold hover:bg-primary-hover transition-colors"
        >
          Submit Request for Quotation
        </button>
        <p className="text-xs text-slate-500 font-body">
          Response within 24 business hours. All information is kept confidential.
        </p>
      </div>
    </form>
  );
}
