/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DoptApi from "..";

export interface GetFlowQueryString {
    version?: number;
    tag?: DoptApi.GetFlowQueryStringTag;
    include?: "block";
    userIdentifier: string;
    groupIdentifier?: string;
}
