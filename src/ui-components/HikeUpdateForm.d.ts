/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Hike } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HikeUpdateFormInputValues = {
    name?: string;
    difficulty?: string;
    location?: string;
    lat?: number;
    long?: number;
    length?: string;
    time?: string;
    coverImg?: string;
};
export declare type HikeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    difficulty?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    long?: ValidationFunction<number>;
    length?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    coverImg?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HikeUpdateFormOverridesProps = {
    HikeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    difficulty?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    long?: PrimitiveOverrideProps<TextFieldProps>;
    length?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    coverImg?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HikeUpdateFormProps = React.PropsWithChildren<{
    overrides?: HikeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hike?: Hike;
    onSubmit?: (fields: HikeUpdateFormInputValues) => HikeUpdateFormInputValues;
    onSuccess?: (fields: HikeUpdateFormInputValues) => void;
    onError?: (fields: HikeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HikeUpdateFormInputValues) => HikeUpdateFormInputValues;
    onValidate?: HikeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HikeUpdateForm(props: HikeUpdateFormProps): React.ReactElement;
