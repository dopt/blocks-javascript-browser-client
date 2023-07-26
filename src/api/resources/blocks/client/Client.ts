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

export declare namespace Blocks {
    interface Options {
        environment?: core.Supplier<environments.DoptApiEnvironment | string>;
        apiKey: core.Supplier<string>;
    }
}

export class Blocks {
    constructor(protected readonly options: Blocks.Options) {}

    /**
     * @throws {@link DoptApi.BadRequestError}
     * @throws {@link DoptApi.UnauthorizedError}
     * @throws {@link DoptApi.NotFoundError}
     * @throws {@link DoptApi.InternalServerError}
     */
    public async getBlock(uid: string, request: DoptApi.GetBlockRequest): Promise<DoptApi.GetBlockResponse> {
        const { version, userIdentifier } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("version", version.toString());
        _queryParams.append("userIdentifier", userIdentifier);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.DoptApiEnvironment.Default,
                `v2/block/${uid}`
            ),
            method: "GET",
            headers: {
                "X-Api-Key": await core.Supplier.get(this.options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "1.0.8",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.GetBlockResponse.parseOrThrow(_response.body, {
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
    public async transition(uid: string, request: DoptApi.TransitionRequest): Promise<void> {
        const { transitions, version, userIdentifier, groupIdentifier, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (transitions != null) {
            if (Array.isArray(transitions)) {
                for (const _item of transitions) {
                    _queryParams.append("transitions", _item);
                }
            } else {
                _queryParams.append("transitions", transitions);
            }
        }

        _queryParams.append("version", version.toString());
        _queryParams.append("userIdentifier", userIdentifier);
        if (groupIdentifier != null) {
            _queryParams.append("groupIdentifier", groupIdentifier);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this.options.environment)) ?? environments.DoptApiEnvironment.Default,
                `v2/block/${uid}/transition`
            ),
            method: "POST",
            headers: {
                "X-Api-Key": await core.Supplier.get(this.options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "1.0.8",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.TransitionRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
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
