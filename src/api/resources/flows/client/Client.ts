/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as DoptApi from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Flows {
    interface Options {
        environment?: core.Supplier<environments.DoptApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }
}

export class Flows {
    constructor(protected readonly options: Flows.Options) {}

    /**
     * @throws {@link DoptApi.BadRequestError}
     * @throws {@link DoptApi.UnauthorizedError}
     * @throws {@link DoptApi.NotFoundError}
     * @throws {@link DoptApi.InternalServerError}
     */
    public async getFlow(sid: string, request: DoptApi.GetFlowRequest): Promise<DoptApi.GetFlowResponse> {
        const { userIdentifier, groupIdentifier, version, tag, include } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("userIdentifier", userIdentifier);
        if (groupIdentifier != null) {
            _queryParams.append("groupIdentifier", groupIdentifier);
        }

        if (version != null) {
            _queryParams.append("version", version.toString());
        }

        if (tag != null) {
            _queryParams.append("tag", tag);
        }

        if (include != null) {
            _queryParams.append("include", include);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.DoptApiEnvironment.Default,
                `v2/flow/${sid}`
            ),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this.options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "1.1.7",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.GetFlowResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DoptApi.BadRequestError(_response.error.body);
                case 401:
                    throw new DoptApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new DoptApi.NotFoundError(_response.error.body);
                case 500:
                    throw new DoptApi.InternalServerError(_response.error.body);
                default:
                    throw new errors.DoptApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DoptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DoptApiTimeoutError();
            case "unknown":
                throw new errors.DoptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link DoptApi.BadRequestError}
     * @throws {@link DoptApi.UnauthorizedError}
     * @throws {@link DoptApi.NotFoundError}
     * @throws {@link DoptApi.InternalServerError}
     */
    public async intent(
        sid: string,
        intent: DoptApi.IntentRequestIntent,
        request: DoptApi.IntentRequest
    ): Promise<void> {
        const { userIdentifier, groupIdentifier, version, tag, force, ..._body } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("userIdentifier", userIdentifier);
        if (groupIdentifier != null) {
            _queryParams.append("groupIdentifier", groupIdentifier);
        }

        if (version != null) {
            _queryParams.append("version", version.toString());
        }

        if (tag != null) {
            _queryParams.append("tag", tag);
        }

        if (force != null) {
            _queryParams.append("force", force.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.DoptApiEnvironment.Default,
                `v2/flow/${sid}/${await serializers.IntentRequestIntent.jsonOrThrow(intent)}`
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this.options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "1.1.7",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.IntentRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DoptApi.BadRequestError(_response.error.body);
                case 401:
                    throw new DoptApi.UnauthorizedError(_response.error.body);
                case 404:
                    throw new DoptApi.NotFoundError(_response.error.body);
                case 500:
                    throw new DoptApi.InternalServerError(_response.error.body);
                default:
                    throw new errors.DoptApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DoptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DoptApiTimeoutError();
            case "unknown":
                throw new errors.DoptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
