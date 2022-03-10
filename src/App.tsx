import React from "react";
import { Cell } from "react-table";

import { useGetAllAssets, useGetTicker } from "./api/hooks";
import { FormattedAssets, Ticker } from "./api/types";

import { MiniHeroComponent, TableComponent } from "./components";

import { formatCurrency } from "./utils";

function App() {
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

    return formatedAssets;

    // return formatedAssets.map(({ asset, ticker }, index) => (
    //   <tr key={index} className="bg-white border-b border-gray-200">
    //     <td className="py-4 px-6 text-base font-medium  text-gray-900 whitespace-nowrap">
    //       <div className="flex items-end flex-wrap">
    //         <span className="font-semibold">{asset?.assetCode}</span>
    //         <span className="text-xs text-slate-500 pl-2">
    //           {asset?.assetName}
    //         </span>
    //       </div>
    //     </td>
    //     <td className="py-4 px-6 text-base font-medium  text-gray-900 whitespace-nowrap">
    //       {formatCurrency(ticker?.lastPrice.toString())}
    //     </td>
    //     <td className={`py-4 px-6 text-base text-gray-500 whitespace-nowrap`}>
    //       {ticker?.priceChangePercent}
    //     </td>
    //     <td className="py-4 px-6 text-base text-gray-500 whitespace-nowrap">
    //       {Math.ceil(
    //         typeof ticker?.volume !== "undefined" ? +ticker?.volume : 0
    //       )}
    //     </td>
    //   </tr>
    // ));
  }, [
    dataTicker,
    dataAssets,
    isAssetsError,
    isAssetsSucess,
    isTickerError,
    isTickerSuccess,
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
      },
      {
        Header: "24h Change",
        accessor: "ticker.priceChangePercent",
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
        <TableComponent columns={columns} data={MappingAssets} />
      </div>
    </div>
  );
}

export default App;
