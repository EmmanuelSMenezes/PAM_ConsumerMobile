import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Header from "../../components/Header";
import { globalStyles } from "../../styles/globalStyles";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../styles/theme";
import ModalCardPay from "../Shared/AddPayment/components/ModalCardPay";
import { useUser } from "../../hooks/UserContext";
import { formatCardNumber } from "../../utils/formatCardNumber";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../../hooks/GlobalContext";
import Payment from "payment";
import { useThemeContext } from "../../hooks/themeContext";
const images = require("../../components/CreditCard/card-images");

const validate = Payment.fns;

const PaymentCard: React.FC = () => {
  const { consumerCards, getAllCards, deleteCard } = useUser();
  const { navigate } = useNavigation();
  const { openAlert } = useGlobal();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [state, setState] = useState({ type: { name: "unknown", length: 16 } });
  const { dynamicTheme, setDynamicTheme, themeController } = useThemeContext();

  useEffect(() => {
    getAllCards();
  }, []);

  const removeCard = async (card_id: string) => {
    await deleteCard(card_id);

    openAlert({
      title: "Cartão removido",
      description: "Seu cartão foi removido com sucesso",
      type: "success",
      buttons: {
        confirmButtonTitle: "Ok",
        cancelButton: false,
      },
    });
  };

  const handleRemoveCard = (card_id: string) => {
    openAlert({
      title: "Tem certeza?",
      description: "Ao apagar um cartão, esta ação não poderá ser desfeita",
      type: "warning",
      buttons: {
        onConfirm: () => removeCard(card_id),
      },
    });
  };

  return (
    <MenuProvider>
      <View style={globalStyles.container}>
        <ModalCardPay
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Header backButton />
          <Text style={globalStyles.title}>Seus cartões</Text>
          <View style={styles.container}>
            {consumerCards.length > 0 ? (
              consumerCards?.map((item) => {
                if (!item.number) {
                  setState({ type: { name: "unknown", length: 16 } });
                }
                const type = validate?.cardType(item.number);

                return (
                  <View key={item.card_id} style={[styles.paymentCard]}>
                    <View style={styles.checkOutlineContainer} />
                    <View style={{ flex: 1 }}>
                      <View style={styles.paymentHeader}>
                        <Text style={styles.paymentTitle}>
                          {formatCardNumber(item.number)}
                        </Text>
                        <Image
                          style={styles.logo}
                          source={{ uri: type ? images[type] : type }}
                        />
                        <Menu>
                          <MenuTrigger>
                            <MaterialIcons
                              name="more-vert"
                              size={20}
                              color={theme.colors.gray}
                            />
                          </MenuTrigger>
                          <MenuOptions
                            customStyles={{
                              optionsContainer: {
                                borderRadius: 12,
                                maxWidth: 120,
                              },
                            }}
                          >
                            <MenuOption
                              onSelect={() =>
                                navigate("AddPayment", {
                                  type: "Crédito",
                                  cardToEdit: item,
                                })
                              }
                            >
                              <View style={styles.moreOptionsButton}>
                                <Text style={styles.moreOptionsButtonText}>
                                  Editar
                                </Text>
                              </View>
                            </MenuOption>
                            <MenuOption
                              onSelect={() => handleRemoveCard(item.card_id)}
                            >
                              <View style={styles.moreOptionsButton}>
                                <Text style={styles.moreOptionsButtonText}>
                                  Excluir
                                </Text>
                              </View>
                            </MenuOption>
                          </MenuOptions>
                        </Menu>
                      </View>
                      <Text style={styles.paymentCardCVV}>{item.validity}</Text>
                      <Text style={styles.paymentCardHolder}>{item.name}</Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text style={globalStyles.addressesEmpty}>
                Nenhum cartão cadastrado
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={themeController(styles.newPaymentButton)}
            onPress={() => setModalVisible(true)}
          >
            <MaterialIcons
              name="add"
              size={24}
              color={dynamicTheme.colors.primary}
            />
            <Text style={themeController(styles.newPaymentButtonText)}>
              Adicionar novo cartão
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </MenuProvider>
  );
};

export default PaymentCard;
