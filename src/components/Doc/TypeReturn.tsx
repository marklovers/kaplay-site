import { component$ } from "@builder.io/qwik";
import { TypeGenerics } from "./TypeGenerics";
import { TypeSig } from "./TypeSig";

type Props = {
    data?: any;
};

export const TypeReturn = component$(({ data }: Props) => {
    if (data.name === "kaplay") return;

    return (
        <>
            :{" "}
            <>
                <TypeSig data={data?.type?.type ?? data?.type} />
                <TypeGenerics data={data?.type?.type ?? data?.type} />
            </>
        </>
    );
});
