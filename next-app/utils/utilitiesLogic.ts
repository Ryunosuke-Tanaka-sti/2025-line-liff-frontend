export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

// 開発用フラグ
export const mockFlag = false;
