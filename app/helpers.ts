import nodemailer from "nodemailer";

export interface IQuotaionData {
    companyName: string;
    country: string;
    productCategory: string;
    quantity: number;
    productSpecifications: string;
    paymentMode: string;
    businessEmail: string;
    whatsapp: string;
}

const escapeHtml = (value: string | number) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

const toTitleFromSlug = (value: string) =>
    value
        .split(/[-_]/g)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(" ");

const formatPaymentMode = (value: string) => {
    const normalized = value.trim().toLowerCase();
    if (normalized === "lc") return "Letter of Credit (LC)";
    if (normalized === "advance") return "Advance Payment";
    return toTitleFromSlug(value);
};

const renderDetailRows = (data: IQuotaionData) => {
    const details = [
        { label: "Company Name", value: escapeHtml(data.companyName) },
        { label: "Country", value: escapeHtml(data.country) },
        { label: "Product", value: escapeHtml(toTitleFromSlug(data.productCategory)) },
        { label: "Quantity", value: escapeHtml(data.quantity) },
        {
            label: "Product Specifications",
            value: escapeHtml(data.productSpecifications).replace(/\n/g, "<br />"),
        },
        { label: "Payment Mode", value: escapeHtml(formatPaymentMode(data.paymentMode)) },
        { label: "Business Email", value: escapeHtml(data.businessEmail) },
        { label: "WhatsApp Number", value: escapeHtml(data.whatsapp) },
    ];

    return details
        .map(
            (item, index) => `
                <tr>
                    <td style="padding:12px 0; width:36%; vertical-align:top; border-bottom:${
                        index === details.length - 1 ? "0" : "1px solid #e4e7ec"
                    }; font-family:'Trebuchet MS', Arial, sans-serif; font-size:13px; font-weight:700; color:#344054;">
                        ${item.label}
                    </td>
                    <td style="padding:12px 0; vertical-align:top; border-bottom:${
                        index === details.length - 1 ? "0" : "1px solid #e4e7ec"
                    }; font-family:'Trebuchet MS', Arial, sans-serif; font-size:14px; color:#101828; line-height:1.55;">
                        ${item.value}
                    </td>
                </tr>
            `
        )
        .join("");
};

const buildEmailHtml = (data: IQuotaionData) => `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Quotation Request</title>
    </head>
    <body style="margin:0; padding:0; background:#f3f5fb;">
        <span style="display:none; visibility:hidden; opacity:0; height:0; width:0; overflow:hidden;">
            New quotation request from ${escapeHtml(data.companyName)}.
        </span>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3f5fb;">
            <tr>
                <td align="center" style="padding:22px 12px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:700px; border:1px solid #d0d5dd; border-radius:18px; overflow:hidden; background:#ffffff;">
                        <tr>
                            <td style="padding:30px 34px; background:linear-gradient(140deg, #10193f 0%, #1b2d6b 72%, #243f96 100%);">
                                <div style="font-family:'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif; font-size:34px; line-height:1.1; color:#ffffff;">
                                    Zavora TradeAxis
                                </div>
                                <div style="margin-top:7px; font-family:'Trebuchet MS', Arial, sans-serif; font-size:12px; letter-spacing:1.25px; text-transform:uppercase; color:#d4af37;">
                                    Merchant Exporter &middot; India
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:28px 34px 8px 34px;">
                                <h1 style="margin:0 0 8px 0; font-family:'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif; font-size:30px; line-height:1.2; color:#101828;">
                                    New Quotation Request Received
                                </h1>
                                <p style="margin:0; font-family:'Trebuchet MS', Arial, sans-serif; font-size:14px; line-height:1.6; color:#475467;">
                                    A new RFQ has been submitted from your website.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:14px 34px 30px 34px;">
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    ${renderDetailRows(data)}
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:16px 34px; background:#f9fafb; border-top:1px solid #e4e7ec; font-family:'Trebuchet MS', Arial, sans-serif; font-size:12px; color:#667085;">
                                Received on ${escapeHtml(new Date().toUTCString())}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
`;

const buildEmailText = (data: IQuotaionData) => `
New Quotation Request Received
Zavora TradeAxis
Merchant Exporter - India

Company Name: ${data.companyName}
Country: ${data.country}
Product: ${toTitleFromSlug(data.productCategory)}
Quantity: ${data.quantity}
Product Specifications: ${data.productSpecifications}
Payment Mode: ${formatPaymentMode(data.paymentMode)}
Business Email: ${data.businessEmail}
WhatsApp Number: ${data.whatsapp}
`.trim();

export async function emailQuotaion(data: IQuotaionData) {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailReceiver = process.env.EMAIL_TO || emailUser;

    if (!emailUser || !emailPass || !emailReceiver) {
        return {
            success: false,
            error: "EMAIL_USER / EMAIL_PASS / EMAIL_TO are not configured.",
        };
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: emailUser,
            pass: emailPass,
        },
    });

    const mailOptions = {
        from: `"Zavora TradeAxis" <${emailUser}>`,
        to: emailReceiver,
        subject: `New Quotation Request - ${data.companyName}`,
        text: buildEmailText(data),
        html: buildEmailHtml(data),
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        return { success: false, error };
    }

    return { success: true, message: "Email sent successfully" };
}
