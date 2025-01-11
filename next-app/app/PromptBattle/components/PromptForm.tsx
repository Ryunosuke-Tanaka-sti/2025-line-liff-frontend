import { useActionState } from "react";

import { PromptFormType } from "@/types/PromptType";

import { useSessionStorage } from "../hooks/usePromptData";

type PrevFormDataType = {
  value: PromptFormType;
  validationError: { name: Error | null; prompt: Error | null };
};

const validationName = (name: string) => {
  if (name === "") {
    return new Error("名前を入力してください");
  } else if (name.length > 10) {
    return new Error("名前は10文字以内で入力してください");
  }
  return null;
};
const validationPrompt = (prompt: string) => {
  if (prompt === "") {
    return new Error("入力は必須です");
  } else if (prompt.length > 300) {
    return new Error("300文字以内で入力してください");
  }
  return null;
};

type PromptFormProps = {
  formAction: (formData: PromptFormType) => Promise<void>;
};

export const PromptForm = (props: PromptFormProps) => {
  const { formAction } = props;
  const { getUserData, setUserData } = useSessionStorage();
  const initialPromptData = getUserData();

  const initialFormData: PrevFormDataType = {
    value: {
      name: initialPromptData?.name || "",
      prompt: initialPromptData?.prompt || "",
    },
    validationError: { name: null, prompt: null },
  };
  const [formData, action, isPending] = useActionState<
    PrevFormDataType,
    FormData
  >(async (_: PrevFormDataType, formData: FormData) => {
    // FormDataをobjectに変換
    const _formData = Object.fromEntries(formData.entries());
    const data: PromptFormType = {
      name: _formData.name as string,
      prompt: _formData.prompt as string,
    };

    // validationを掛ける　いい感じのライブラリがあれば参考にする
    const nameError = validationName(data.name);
    const promptError = validationPrompt(data.prompt);
    if (nameError || promptError) {
      return {
        value: { name: data.name, prompt: data.prompt },
        validationError: {
          name: nameError,
          prompt: promptError,
        },
      };
    }

    // API処理
    await formAction(data);
    setUserData(data);

    return {
      value: { name: data.name, prompt: data.prompt },
      validationError: {
        name: nameError,
        prompt: promptError,
      },
    };
  }, initialFormData);

  return (
    <>
      {isPending && <>戦闘中</>}
      {/* TODO:ここで戦闘中なのをUserに通知 */}

      <form action={action} className="flex w-full flex-col gap-2">
        <label className="flex w-full flex-col">
          <ul className="flex flex-row items-center justify-between text-sm font-bold">
            <li>挑戦者の名前</li>
            <li className="px-2 text-xs text-red-500">*必須</li>
          </ul>
          <input
            className="p-1"
            type="text"
            name="name"
            defaultValue={formData.value.name}
            placeholder="名前を入力してください。"
          />
          <span className="flex min-h-5 items-center text-xs text-red-300">
            {formData.validationError.name && (
              <>{formData.validationError.name.message}</>
            )}
          </span>
        </label>

        <label className="flex w-full flex-col">
          <ul className="flex flex-row items-center justify-between text-sm font-bold">
            <li>特徴・武器</li>
            <li className="px-2 text-xs text-red-500">*必須</li>
          </ul>
          <textarea
            className="h-72 p-1"
            name="prompt"
            defaultValue={formData.value.prompt}
            placeholder="ここを埋めることで、対戦相手によりリアルな戦闘が提供されます。"
          />
          <span className="flex min-h-5 items-center text-xs text-red-300">
            {formData.validationError.prompt && (
              <>{formData.validationError.prompt.message}</>
            )}{" "}
          </span>
        </label>
        <button
          className={
            "flex w-full items-center justify-center  py-4 text-xl font-bold text-white" +
            (isPending ? " bg-gray-300" : " bg-green-500")
          }
          type="submit"
          formAction={action}
          disabled={isPending}
        >
          送信{isPending && "中"}
        </button>
      </form>
    </>
  );
};
