/// <reference types="react-scripts" />

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;