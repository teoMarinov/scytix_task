export type Maybe<T> = T | null | undefined;

export type ArrayElement<T> = T extends (infer U)[] ? U : never;
