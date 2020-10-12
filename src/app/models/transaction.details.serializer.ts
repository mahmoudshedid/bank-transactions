import { TransactionDetails } from './transaction.details';

export class TransactionDetailsSerializer {
    fromJson(json: any): TransactionDetails {
        const transactionDetails = new TransactionDetails();
        transactionDetails.categoryCode = json.categoryCode;
        transactionDetails.dates = json.dates;
        transactionDetails.transaction = json.transaction;
        transactionDetails.merchant = json.merchant;

        return transactionDetails;
    }

    toJson(transactionDetails: TransactionDetails): any {
        return {
            categoryCode: transactionDetails.categoryCode,
            dates: transactionDetails.dates,
            transaction: transactionDetails.transaction,
            merchant: transactionDetails.merchant,
        };
    }
}
