import { TransactionName } from './transaction.name';

export class TransactionNameSerializer {
    fromJson(json: any): TransactionName {
        const transactionName = new TransactionName();
        transactionName.name = json.merchant.name;
        return transactionName;
    }

    toJson(transactionName: TransactionName): any{

    }
}
