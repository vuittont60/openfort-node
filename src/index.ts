import { AccountsApiWrapper } from "./apis/accountsApiWrapper";
import { ContractsApiWrapper } from "./apis/contractsApiWrapper";
import { Observable } from "./utilities/observable";
import { Observer } from "./utilities/observer";
import { PlayersApiWrapper } from "./apis/playersApiWrapper";
import { PoliciesApiWrapper } from "./apis/policiesApiWrapper";
import { PolicyRulesApiWrapper } from "./apis/policyRulesApiWrapper";
import { SessionsApiWrapper } from "./apis/sessionsApiWrapper";
import { TransactionIntentsApiWrapper } from "./apis/transactionIntentsApiWrapper";
import { InventoryApiWrapper } from "./apis/inventoryApiWrapper";

export default class Openfort {
    private readonly apiWrappers = {};
    private readonly observers: Observer[] = [];

    constructor(private readonly apiKey: string, private readonly basePath?: string) {}

    public get accounts(): AccountsApiWrapper {
        return this.getOrCreateWrapper(AccountsApiWrapper);
    }

    public get contracts(): ContractsApiWrapper {
        return this.getOrCreateWrapper(ContractsApiWrapper);
    }

    public get players(): PlayersApiWrapper {
        return this.getOrCreateWrapper(PlayersApiWrapper);
    }

    public get policies(): PoliciesApiWrapper {
        return this.getOrCreateWrapper(PoliciesApiWrapper);
    }

    public get policyRules(): PolicyRulesApiWrapper {
        return this.getOrCreateWrapper(PolicyRulesApiWrapper);
    }

    public get sessions(): SessionsApiWrapper {
        return this.getOrCreateWrapper(SessionsApiWrapper);
    }

    public get transactionIntents(): TransactionIntentsApiWrapper {
        return this.getOrCreateWrapper(TransactionIntentsApiWrapper);
    }

    public get inventories(): InventoryApiWrapper {
        return this.getOrCreateWrapper(InventoryApiWrapper);
    }

    public subscribe(observer: Observer): void {
        this.observers.push(observer);
        for (const apiWrapper of Object.values(this.apiWrappers)) {
            (apiWrapper as Observable).observers?.push(observer);
        }
    }

    private getOrCreateWrapper<T>(type: new (_accessToken: string, _basePath?: string) => T): T {
        const wrapper = this.apiWrappers[type.name];
        if (wrapper) {
            return wrapper;
        }

        const result = new type(this.apiKey, this.basePath);
        for (const observer of this.observers) {
            (result as Observable).subscribe?.(observer);
        }
        this.apiWrappers[type.name] = result;
        return result;
    }
}

export * from "./models";
