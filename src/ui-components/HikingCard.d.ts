/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Hike } from "../models";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HikingCardOverridesProps = {
    HikingCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Group 1"?: PrimitiveOverrideProps<FlexProps>;
    "Hiking Hours"?: PrimitiveOverrideProps<TextProps>;
    "Hiking Length in Miles"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HikingCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    hike?: Hike;
} & {
    overrides?: HikingCardOverridesProps | undefined | null;
}>;
export default function HikingCard(props: HikingCardProps): React.ReactElement;
