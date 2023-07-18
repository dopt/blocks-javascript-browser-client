/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DoptApi from "../../api";
import * as core from "../../core";

export const FlowIntentRequestParams: core.serialization.ObjectSchema<
    serializers.FlowIntentRequestParams.Raw,
    DoptApi.FlowIntentRequestParams
> = core.serialization.object({
    uid: core.serialization.string(),
    intent: core.serialization.lazy(async () => (await import("..")).FlowIntentRequestParamsIntent),
});

export declare namespace FlowIntentRequestParams {
    interface Raw {
        uid: string;
        intent: serializers.FlowIntentRequestParamsIntent.Raw;
    }
}
