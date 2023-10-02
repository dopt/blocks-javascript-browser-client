/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DoptApi from "..";

export type GetFlowResponseBlocksItemFieldsItem =
    | DoptApi.GetFlowResponseBlocksItemFieldsItem.String
    | DoptApi.GetFlowResponseBlocksItemFieldsItem.Number
    | DoptApi.GetFlowResponseBlocksItemFieldsItem.Boolean
    | DoptApi.GetFlowResponseBlocksItemFieldsItem.RichText;

export declare namespace GetFlowResponseBlocksItemFieldsItem {
    interface String extends DoptApi.GetFlowResponseBlocksItemFieldsItemString {
        type: "string";
    }

    interface Number extends DoptApi.GetFlowResponseBlocksItemFieldsItemNumber {
        type: "number";
    }

    interface Boolean extends DoptApi.GetFlowResponseBlocksItemFieldsItemBoolean {
        type: "boolean";
    }

    interface RichText extends DoptApi.GetFlowResponseBlocksItemFieldsItemRichText {
        type: "richText";
    }
}
