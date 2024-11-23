export const loadPaginatedData = async <T>(
  fetchFunc: (page: number) => Promise<{ items: T[]; totalPages: number }>
): Promise<T[]> => {
  let page = 1;
  let allData: T[] = [];

  while (true) {
    const { items, totalPages } = await fetchFunc(page);
    allData = allData.concat(items);
    if (page >= totalPages) break;
    page++;
  }

  return allData;
};
