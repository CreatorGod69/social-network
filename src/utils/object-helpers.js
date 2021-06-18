export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  newObjProps
) => {
  return items.map((u) => {
    if (u[objPropName] === itemId) {
      console.log(u[objPropName]);
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
