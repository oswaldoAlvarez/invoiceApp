import { axiosInstance } from "@/lib/axios";
import { useInfiniteQuery } from "@tanstack/react-query";

export const fetchInvoices = async ({
  pageParam = 1,
  filters = {},
  pageSize = 10,
}) => {
  const res = await axiosInstance.post("/invoices", {
    page: pageParam,
    pageSize,
    ...filters,
  });

  return res.data?.data ?? { items: [], totalPages: 0 };
};

export const useInvoices = ({ filters = {}, pageSize = 10 }) =>
  useInfiniteQuery({
    queryKey: ["invoices", filters, pageSize],
    queryFn: ({ pageParam = 1 }) =>
      fetchInvoices({ pageParam, filters, pageSize }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= (lastPage.totalPages ?? 0) ? nextPage : undefined;
    },
    refetchInterval: 5000,
  });
