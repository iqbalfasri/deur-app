import React from "react";
import { Cell } from "react-table";

import { useGetAllAssets, useGetTicker } from "./api/hooks";
import { FormattedAssets, Ticker } from "./api/types";

import { MiniHeroComponent, TableComponent, TagComponent } from "./components";

import { formatCurrency } from "./utils";

function App() {
  const [selectedTag, setSelectedTag] = React.useState<string>("");
  const [tags, setTags] = React.useState<string[]>([]);

  const {
    data: dataAssets,
    isLoading: isAssetsLoading,
    isSuccess: isAssetsSucess,
    isError: isAssetsError,
  } = useGetAllAssets();
  const {
    data: dataTicker,
    isLoading: isTickerLoading,
    isSuccess: isTickerSuccess,
    isError: isTickerError,
  } = useGetTicker();

  React.useEffect(() => {
    if (isAssetsSucess) {
      const tags = [];
      for (const asset of dataAssets) {
        tags.push(...asset.tags);
      }

      const uniqueTags = ["All", ...new Set(tags)];
      setTags(uniqueTags);
      setSelectedTag(uniqueTags[0]); // "All"
    }
  }, [dataAssets, isAssetsError, isAssetsLoading, isAssetsSucess]);

  const MappingAssets = React.useMemo(() => {
    let formatedAssets: FormattedAssets[] = [];

    if (isTickerSuccess && !isTickerError && isAssetsSucess && !isAssetsError) {
      dataAssets.forEach((asset) => {
        const { assetCode } = asset;

        const findSameSymbol = dataTicker.find((ticker: Ticker) => {
          return (
            ticker.symbol.includes(`${assetCode}BIDR`) && +ticker.lastPrice > 0
          );
        });

        if (typeof findSameSymbol !== "undefined") {
          const obj: FormattedAssets = {
            asset,
            ticker: findSameSymbol,
          };

          formatedAssets.push(obj);
        }
      });
    }

    if (selectedTag.trim().length > 0 && selectedTag !== "All") {
      return formatedAssets.filter(({ asset }) =>
        asset.tags.includes(selectedTag)
      );
    }

    return formatedAssets;
  }, [
    isTickerSuccess,
    isTickerError,
    isAssetsSucess,
    isAssetsError,
    dataAssets,
    dataTicker,
    selectedTag,
  ]);

  const columns = React.useMemo(
    () => [
      {
        id: "name",
        Header: "Name",
        Cell: ({ row }: Cell<FormattedAssets>) => {
          return (
            <div className="flex items-end flex-wrap">
              <span className="font-semibold">
                {row.original.asset?.assetCode}
              </span>
              <span className="text-xs text-slate-500 pl-2">
                {row.original.asset?.assetName}
              </span>
            </div>
          );
        },
      },
      {
        Header: "Latest Price",
        accessor: "ticker.lastPrice",
        Cell: ({ row }: Cell<FormattedAssets>) => {
          return <span>{formatCurrency(row.original.ticker?.lastPrice)}</span>;
        },
      },
      {
        Header: "24h Change",
        accessor: "ticker.priceChangePercent",
        Cell: ({ row }: Cell<FormattedAssets>) => {
          return <span>{row.original.ticker?.priceChangePercent}</span>;
        },
      },
      {
        Header: "24h Volume",
        accessor: "ticker.volume",
      },
    ],
    []
  );

  return (
    <div className="h-screen bg-white">
      <MiniHeroComponent
        title="Deur App"
        description={
          <>
            <i>Deur</i> artinya adalah <strong>"Pintu"</strong> dalam bahasa
            Belanda.
          </>
        }
      />

      <div className="container mx-auto">
        <div className="w-full flex overflow-x-scroll pb-4 mb-4">
          {isAssetsLoading ? (
            <span>Loading...</span>
          ) : tags.length > 0 ? (
            tags.map((tag, index) => {
              return (
                <TagComponent
                  key={index}
                  active={selectedTag === tag}
                  label={tag}
                  onClick={() => setSelectedTag(tag)}
                />
              );
            })
          ) : null}
        </div>
        <TableComponent columns={columns} data={MappingAssets} />
      </div>
    </div>
  );
}

export default App;
