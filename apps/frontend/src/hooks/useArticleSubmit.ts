import { useState } from "react";
import { ArticleInput } from "@/types/article";
import { validateArticle } from "@/lib/validation";
import { generateIdempotencyKey } from "@/lib/idempotency";
import { submitArticle } from "@/lib/api";

export function useArticleSubmit() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const submit = async (data: ArticleInput) => {
    setLoading(true);
    setSuccess(false);
    setResponse(null);

    // 1. Validate input
    const validationErrors = validateArticle(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      // 2. Generate idempotency key
      const key = await generateIdempotencyKey(
        data.title + data.content
      );

      // 3. Build payload for n8n
      const payload = {
        ...data,
        idempotency_key: key,
        created_at: new Date().toISOString(),
      };

      console.log("📤 Sending to n8n:", payload);

      // 4. Call backend (n8n webhook)
      const result = await submitArticle(payload);

      console.log("📥 n8n response:", result);

      // 5. Success state
      setSuccess(true);
      setErrors({});
      setResponse(result);
    } catch (err: any) {
      console.error("Submission failed:", err);

      setErrors({
        submit: err.message || "Something went wrong",
      });

      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    submit,
    loading,
    errors,
    success,
    response,
  };
}