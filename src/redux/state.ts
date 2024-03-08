export const saveState = ({ key, value }: { key: string, value: any }) => {
  try {
    const isSerializedState = localStorage.getItem("state");
    if (!isSerializedState) {
      const obj = JSON.stringify({ [key]: value });
      localStorage.setItem("state", obj);
    } else {
      const existData = JSON.parse(isSerializedState);
      existData[key] = value;
      localStorage.setItem("state", JSON.stringify(existData));
    }
  } catch {
    // We'll just ignore write errors
  }
};

export const loadState = (key?: string) => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    const data = JSON?.parse(serializedState);
    if (data && key) {
      return data[key];
    } else {
      return data;
    }
  } catch (error) {
    return undefined;
  }
};
