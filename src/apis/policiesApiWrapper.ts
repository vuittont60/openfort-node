import {
    CreatePolicyRequest,
    CreatePolicyRuleRequest,
    GasReport,
    GetAllowFunctionsRequest,
    GetPolicyRequest,
    GetPolicyTotalGasUsageRequest,
    PolicyListResponse,
    PolicyDeleteResponse,
    PolicyResponse,
    PolicyRuleResponse,
    PolicyRuleListResponse,
    UpdatePolicyAllowFunctionRequest,
    UpdatePolicyRequest,
    PolicyListQueries,
} from "../models";
import { BaseApiWrapper } from "./baseApiWrapper";
import { PoliciesApi } from "../generated";
import { httpErrorHandler } from "../utilities/httpErrorHandler";

@httpErrorHandler
export class PoliciesApiWrapper extends BaseApiWrapper<PoliciesApi> {
    constructor(accessToken: string, basePath?: string) {
        super(PoliciesApi, accessToken, basePath);
    }

    /**
     * Creates policy
     * @param req parameters to create
     */
    public async create(req: CreatePolicyRequest): Promise<PolicyResponse> {
        return await this.api.createPolicy(req);
    }

    /**
     * Updates policy
     * @param req parameters to create
     */
    public async update(req: UpdatePolicyRequest): Promise<PolicyResponse> {
        const { id, ...body } = req;
        return await this.api.updatePolicy(id, body);
    }

    /**
     * Creates allow function
     * @param req parameters to create
     */
    public async createAllowFunction(req: CreatePolicyRuleRequest): Promise<PolicyRuleResponse> {
        const { policy, ...body } = req;
        return await this.api.createPolicyAllowFunction(policy, body);
    }

    /**
     * Deletes a policy object.
     * @param id
     */
    public async delete(id: string): Promise<PolicyDeleteResponse> {
        return await this.api.deletePolicy(id);
    }

    /**
     * Disable a policy object.
     * @param id Specifies the unique policy ID.
     */
    public async disable(id: string): Promise<PolicyResponse> {
        return await this.api.disablePolicy(id);
    }
    /**
     * Enable a policy object.
     * @param id
     */
    public async enable(id: string): Promise<PolicyResponse> {
        return await this.api.enablePolicy(id);
    }

    /**
     * Gets all policy objects for a given project.
     * @param req Criteria to retrieve the policies by
     */
    public async list(req?: PolicyListQueries): Promise<PolicyListResponse> {
        return await this.api.getPolicies(
            req?.limit,
            req?.skip,
            req?.order,
            req?.expand,
            req?.name,
            req?.deleted,
            req?.chainId,
        );
    }

    /**
     * Gets a policy object for a given project.
     * @param req Criteria to retrieve the policy by
     */
    public async get(req: GetPolicyRequest): Promise<PolicyResponse> {
        return await this.api.getPolicy(req.id, req.expand);
    }

    /**
     * Gets allows functions
     * @param req Criteria to get allow functions
     */
    public async getAllowFunctions(req: GetAllowFunctionsRequest): Promise<PolicyRuleListResponse> {
        return await this.api.getPolicyAllowFunctions(req.id, req.expand);
    }

    /**
     * Get policy total gas usage
     * @param req Criteria to get usage
     */
    public async getPolicyTotalGasUsage(req: GetPolicyTotalGasUsageRequest): Promise<GasReport> {
        return await this.api.getPolicyTotalGasUsage(req.id);
    }

    /**
     * Update policy allow function
     * @param req Parameters to update
     */
    public async updateAllowFunction(req: UpdatePolicyAllowFunctionRequest): Promise<PolicyRuleResponse> {
        const { policy, policyRule, ...body } = req;
        return await this.api.updatePolicyAllowFunction(policy, policyRule, body);
    }
}
