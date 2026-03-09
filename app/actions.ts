"use server";

import { emailQuotaion } from "./helpers";
import { RFQSchema } from "./schema";

type RFQIssue = {
    path: string;
    message: string;
};

type SubmitRFQState = {
    success: boolean;
    message: string;
    issues: RFQIssue[];
};

export async function submitRFQ(
    _previousState: SubmitRFQState,
    formData: FormData
): Promise<SubmitRFQState> {
    const inputData = Object.fromEntries(formData.entries());
    const result = RFQSchema.safeParse(inputData);

    if (result.success) {
        const parsedIputData = result.data;
        const emailResult =  await emailQuotaion(parsedIputData);
        if(emailResult.success){
            return { success: true, message: "RFQ submitted successfully.", issues: [] };
        }else{
            return { success: false, message: "RFQ Request Failed.", issues: [] };
        }
        
    }

    const issues = result.error.issues.map((issue) => ({
            path: issue.path.join(".") || "(root)",
            message: issue.message,
    }));

    console.error("Validation failed for RFQ:", issues);
    return {
        success: false,
        message: "The form contains invalid data. Please correct the highlighted fields.",
        issues,
    };
}
