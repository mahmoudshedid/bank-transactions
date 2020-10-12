import { Merchant } from './merchant';
import { Transaction } from './transaction';

export class TransactionDetails {
    id: number;
    categoryCode: string;
    dates: {
        valueDate: number
    };
    transaction: Transaction;
    merchant: Merchant;
}
