import { PaymentDetailsProps } from "./types";

export const allPaymentStages = ["Amount", "Recipient", "Review", "Pay"];

export const initialPaymentDetails: PaymentDetailsProps = {
  senderAmount: "",
  senderCurrency: "USD",
  receiverCurrency: "EUR",
  insideEurope: true,
  fee: "3.69",
  rate: "1.14989",
  receiverName: "",
  receiverEmail: "",
  iban: "",
  swiftCode: "",
};
