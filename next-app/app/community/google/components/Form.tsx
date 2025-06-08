"use client";

import { useActionState } from "react";

type FormType = {
  url: string;
};
type PrevFormDataType = {
  value: FormType;
  validationError: { url: Error | null };
  apiError: Error | null;
};
export const FormComponent = () => {
  const initialFormData: PrevFormDataType = {
    value: { url: "" },
    validationError: { url: null },
    apiError: null,
  };

  const validationUrl = (url: string) => {
    try {
      new URL(url);
      return null; // URLが有効な場合はエラーなし
    } catch (e) {
      return new Error(`Invalid URL format ${e}`); // 無効なURLの場合はエラーを返す
    }
  };

  const [formData, action, isPending] = useActionState<
    PrevFormDataType,
    FormData
  >(async (_: PrevFormDataType, formData: FormData) => {
    // FormDataをobjectに変換
    const _formData = Object.fromEntries(formData.entries());
    const data: FormType = {
      url: _formData.url as string,
    };

    // validationを掛ける　いい感じのライブラリがあれば参考にする
    const urlError = validationUrl(data.url);

    if (urlError) {
      return {
        value: { url: data.url },
        validationError: {
          url: urlError,
        },
        apiError: null,
      };
    }

    // ここでAPI処理を実装・今回は2秒待ってエラーを返す
    const res = await fetch("/api/google-auth/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        functionName: "insertDataToTargetSheet",
        params: [data.url],
      }),
    });
    if (res.status === 200) {
      alert("Data submitted successfully!");
      return {
        value: { url: "" },
        validationError: { url: null },
        apiError: null,
      };
    }

    const apiError = new Error("Failed to submit data");

    return {
      value: { url: data.url },
      validationError: {
        url: urlError,
      },
      apiError: apiError,
    };
  }, initialFormData);

  return (
    <>
      <form
        action={action}
        className="flex w-full max-w-xl flex-col gap-2 rounded-md p-4 shadow"
      >
        <label className="flex flex-col">
          <div className="flex flex-row text-xl">
            <span className="w-1/3">名前：</span>
            <input
              className="w-full border p-1 text-right"
              type="text"
              name="url"
              defaultValue={formData.value.url}
            />
          </div>
          <span className="h-4 text-xs text-red-500">
            {formData.validationError.url && (
              <>{formData.validationError.url.message}</>
            )}
          </span>
        </label>
        <button
          className={
            "w-full rounded-md py-4 text-lg text-white" +
            (isPending ? " bg-gray-400" : " bg-blue-500")
          }
          type="submit"
          formAction={action}
          disabled={isPending}
        >
          送信{isPending && "中"}
        </button>
        <span className="h-4 text-xs text-red-500">
          {formData.apiError && <p>{formData.apiError.message}</p>}
        </span>
      </form>
    </>
  );
};
