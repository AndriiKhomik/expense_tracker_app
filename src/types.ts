export type IExpense = {
  id?: string;
  _id?: string;
  ids?: string[];
  storeName: string;
  expenseAmount: number;
  expenseDate: Date;
  paymentMethod: string;
};

export type Pages = {
  page: string;
  url: string;
};
