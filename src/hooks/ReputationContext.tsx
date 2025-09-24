import { createContext, useCallback, useContext } from "react";
import { REACT_APP_URL_MS_REPUTATION } from "@env";
import api from "../services/api";
import { useGlobal } from "./GlobalContext";
import {
  EvaluatePartnerProps,
  PartnerRating,
  Rating,
} from "../interfaces/Reputation";
import { useUser } from "./UserContext";
import { useAuth } from "./AuthContext";

interface ReputationProviderProps {
  children: React.ReactNode;
}

interface ReputationContextValues {
  evaluatePartner: (rating: EvaluatePartnerProps) => Promise<PartnerRating>;
  getBranchWasEvaluated: (branch_id: string) => Promise<PartnerRating>;
}

const ReputationContext = createContext({} as ReputationContextValues);

const ReputationProvider = ({ children }: ReputationProviderProps) => {
  const { openAlert } = useGlobal();
  const { user } = useAuth();

  const evaluatePartner = useCallback(
    async (rating: EvaluatePartnerProps): Promise<PartnerRating> => {
      try {
        const response = await api.post(
          `${REACT_APP_URL_MS_REPUTATION}/rating/create`,
          rating
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

  const getBranchWasEvaluated = useCallback(
    async (branch_id: string): Promise<PartnerRating> => {
      try {
        const response = await api.get(
          `${REACT_APP_URL_MS_REPUTATION}/rating/byconsumer?branch_id=${branch_id}&user_id=${user.user_id}`
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
    [user]
  );

  const contextValues = {
    evaluatePartner,
    getBranchWasEvaluated,
  };

  return (
    <ReputationContext.Provider value={contextValues}>
      {children}
    </ReputationContext.Provider>
  );
};

const useReputation = () => {
  const context = useContext(ReputationContext);

  return context;
};

export { useReputation, ReputationProvider };
