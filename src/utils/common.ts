//example

export const getDateTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");

  return { day, month, year, hours, minutes };
};

export function checkIsArray(array: any[]) {
  return Array.isArray(array);
}

export function isArrayEmpty(array: any[]) {
  const isArray = checkIsArray(array);
  if (isArray) {
    return !(array.length > 0);
  }
  return true;
}
