import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  REACT_APP_URL_MS_CONSUMER,
  REACT_APP_URL_MS_OFFER,
  REACT_APP_URL_MS_PARTNER,
} from "@env";
import api from "../services/api";
import { useGlobal } from "./GlobalContext";
import {
  IBranch,
  IBranches,
  IOfferProducts,
  IOfferSearchedProducts,
  ISearchFilters,
} from "../interfaces/Offer";
import { useUser } from "./UserContext";
import { TSortOptions } from "../interfaces/Utils";

export type OrderProductsBy = 'Ratings' | 'Price'

interface OfferProviderProps {
  children: React.ReactNode;
}

interface OfferContextValues {
  getProductsByBranch: (
    branch_id: string,
    filter?: string,
    page?: number,
    itensPerPage?: number
  ) => Promise<IOfferProducts>;
  getProductsByLocation: (
    itensPerPage?: number,
    page?: number,
    filter?: string,
    category_ids?: string,
    branch_ids?: string,
    ratings?: string,
    distance?: string,
    start_price?: string,
    end_price?: string,
    sort_price?: TSortOptions,
    orderBy?: OrderProductsBy,
    shipping?: boolean
  ) => Promise<IOfferSearchedProducts>;
  getStoresByLocation: (
    orderBy?: TOrderOptions,
    sort?: TSortOptions,
    filter?: string,
    page?: number,
    itensPerPage?: number
  ) => Promise<IBranches>;
  getStoreIsAvailable: (
    branch_id: string,
    latitude?: number,
    longitude?: number
  ) => Promise<boolean>;
  getFilterByLocation: (
    filter?: string,
    latitude?: number,
    longitude?: number
  ) => Promise<ISearchFilters>;
}

type TOrderOptions = "Ratings" | "OrdersNumbers";

const OfferContext = createContext({} as OfferContextValues);

const OfferProvider = ({ children }: OfferProviderProps) => {
  const { openAlert } = useGlobal();
  const { defaultAddress } = useUser();

  const getProductsByBranch = useCallback(
    async (
      branch_id: string,
      filter?: string,
      page?: number,
      itensPerPage: number = 12
    ): Promise<IOfferProducts> => {
      const queries = {
        branch_id,
        filter,
        page,
        itensPerPage,
      };

      const queriesData = Object.entries(queries)
        .filter(([key, value]) => !!value)
        .map(([key, value], index) => {
          if (value)
            return index === 0 ? `?${key}=${value}` : `${key}=${value}`;
        })
        .join("&");

      try {
        const response = await api.get(
          `${REACT_APP_URL_MS_OFFER}/offer/productOffersByBranch${queriesData}`
        );

        const { message, data } = response?.data;

        return data;
      } catch (error) {
        openAlert({
          title: "Erro inesperado",
          description: `${error?.response?.data?.message}`,
          type: "error",
          buttons: {
            confirmButtonTitle: "Ok",
            cancelButton: false,
          },
        });

        if (error.message === "Network Error") {
          openAlert({
            title: "Sem conexão",
            description: "Verifique sua conexão com a rede",
            type: "error",
            buttons: {
              confirmButtonTitle: "Ok",
              cancelButton: false,
            },
          });
        }
      }
    },
    []
  );

  const getProductsByLocation = useCallback(
    async (
      itensPerPage: number = 12,
      page?: number,
      filter?: string,
      category_ids?: string,
      branch_ids?: string,
      ratings?: string,
      distance?: string,
      start_price?: string,
      end_price?: string,
      sort_price?: TSortOptions,
      orderBy: OrderProductsBy = 'Ratings',
      shipping?: boolean,
    ): Promise<IOfferSearchedProducts> => {
      const queries = {
        latitude: defaultAddress.latitude,
        longitude: defaultAddress.longitude,
        filter,
        category_ids,
        branch_ids,
        ratings,
        distance,
        start_price,
        end_price,
        page,
        itensPerPage,
        sort_price,
        orderBy
      };

      const queriesData = Object.entries(queries)
        .filter(([key, value]) => !!value)
        .map(([key, value], index) => {
          if (value)
            return index === 0 ? `?${key}=${value}` : `${key}=${value}`;
        })
        .join("&");
      
      try {
        const response = await api.get(
          `${REACT_APP_URL_MS_OFFER}/offer/productOffersByLocationPoint${queriesData}${shipping ? `&shipping_free=${shipping}` : ''}`
        );

        const { message, data } = response?.data;

        return data;
      } catch (error) {
        console.log(error?.response);
        openAlert({
          title: "Erro inesperado",
          description: `${error?.response?.data?.message}`,
          type: "error",
          buttons: {
            confirmButtonTitle: "Ok",
            cancelButton: false,
          },
        });

        if (error.message === "Network Error") {
          openAlert({
            title: "Sem conexão",
            description: "Verifique sua conexão com a rede",
            type: "error",
            buttons: {
              confirmButtonTitle: "Ok",
              cancelButton: false,
            },
          });
        }
      }
    },
    [defaultAddress]
  );

  const getStoresByLocation = useCallback(
    async (
      orderBy?: TOrderOptions,
      sort?: TSortOptions,
      filter?: string,
      page?: number,
      itensPerPage?: number
    ): Promise<IBranches> => {
      const queries = {
        latitude: defaultAddress?.latitude,
        longitude: defaultAddress?.longitude,
        filter,
        page,
        itensPerPage,
        orderBy,
        sort,
      };

      const queriesData = Object.entries(queries)
        .filter(([key, value]) => !!value)
        .map(([key, value], index) => {
          if (value)
            return index === 0 ? `?${key}=${value}` : `${key}=${value}`;
        })
        .join("&");

      try {
        const response = await api.get(
          `${REACT_APP_URL_MS_OFFER}/offer/branchOffersByLocationPoint${queriesData}`
        );
        const { message, data } = response?.data;

        return data;
      } catch (error) {
        openAlert({
          title: "Erro inesperado",
          description: `${error?.response?.data?.message}`,
          type: "error",
          buttons: {
            confirmButtonTitle: "Ok",
            cancelButton: false,
          },
        });

        if (error.message === "Network Error") {
          openAlert({
            title: "Sem conexão",
            description: "Verifique sua conexão com a rede",
            type: "error",
            buttons: {
              confirmButtonTitle: "Ok",
              cancelButton: false,
            },
          });
        }
      }
    },
    [defaultAddress]
  );

  const getStoreIsAvailable = useCallback(
    async (
      branch_id: string,
      latitude?: number,
      longitude?: number
    ): Promise<boolean> => {
      const coords = {
        latitude: latitude || defaultAddress.latitude,
        longitude: longitude || defaultAddress.longitude,
      };
      try {
        const response = await api.get(
          `${REACT_APP_URL_MS_OFFER}/offer/branchByLocationPoint?latitude=${coords.latitude}&longitude=${coords.longitude}&branch_id=${branch_id}`
        );
        const { message, data } = response?.data;

        return data;
      } catch (error) {
        console.log(JSON.stringify(error));
        openAlert({
          title: "Erro inesperado",
          description: `${error?.response?.data?.message}`,
          type: "error",
          buttons: {
            confirmButtonTitle: "Ok",
            cancelButton: false,
          },
        });

        if (error.message === "Network Error") {
          openAlert({
            title: "Sem conexão",
            description: "Verifique sua conexão com a rede",
            type: "error",
            buttons: {
              confirmButtonTitle: "Ok",
              cancelButton: false,
            },
          });
        }
      }
    },
    [defaultAddress]
  );

  const getFilterByLocation = useCallback(
    async (
      filter?: string,
      latitude?: number,
      longitude?: number
    ): Promise<ISearchFilters> => {
      const coords = {
        latitude: latitude || defaultAddress.latitude,
        longitude: longitude || defaultAddress.longitude,
      };

      try {
        const response = await api.get(
          `${REACT_APP_URL_MS_OFFER}/offer/filtersByLocationPoint?latitude=${
            coords.latitude
          }&longitude=${coords.longitude}${filter ? `&filter=${filter}` : ""}`
        );
        const { message, data } = response?.data;

        return data;
      } catch (error) {
        console.log(JSON.stringify(error));
        openAlert({
          title: "Erro inesperado",
          description: `${error?.response?.data?.message}`,
          type: "error",
          buttons: {
            confirmButtonTitle: "Ok",
            cancelButton: false,
          },
        });

        if (error.message === "Network Error") {
          openAlert({
            title: "Sem conexão",
            description: "Verifique sua conexão com a rede",
            type: "error",
            buttons: {
              confirmButtonTitle: "Ok",
              cancelButton: false,
            },
          });
        }
      }
    },
    [defaultAddress]
  );

  const contextValues = {
    getProductsByBranch,
    getProductsByLocation,
    getStoresByLocation,
    getStoreIsAvailable,
    getFilterByLocation,
  };

  return (
    <OfferContext.Provider value={contextValues}>
      {children}
    </OfferContext.Provider>
  );
};

const useOffer = () => {
  const context = useContext(OfferContext);

  return context;
};

export { useOffer, OfferProvider };
