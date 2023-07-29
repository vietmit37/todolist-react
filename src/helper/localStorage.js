export const getLocalStorage = () => {
  const localValue = localStorage.getItem("taskList");
  if (localValue === null) return [];
  return JSON.parse(localValue);
};
