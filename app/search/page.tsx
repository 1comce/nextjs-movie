import PlaceHolder from "../components/search/placeholder";
import SearchBar from "../components/search/searchbar";
import { getSearchMultiTotalPages } from "../lib/actions";
import { Suspense } from "react";
import SearchResult from "../components/search/searchresult";
import { SearchSkeleton } from "../components/ui/skeleton";
import Pagination from "../components/search/pagination";
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = query ? await getSearchMultiTotalPages(query) : null;
  return (
    <div className='w-full mt-10'>
      <SearchBar placeholder='tìm phim...' />
      {query === "" || !totalPages ? (
        <Suspense fallback={<SearchSkeleton />}>
          <PlaceHolder />
        </Suspense>
      ) : (
        <Suspense key={query + currentPage} fallback={<SearchSkeleton />}>
          <SearchResult query={query} page={currentPage} />
        </Suspense>
      )}
      <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
