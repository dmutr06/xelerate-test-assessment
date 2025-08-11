export function createTranslator(dictionary: Record<string, any>) {
    return function translate(key: string): string {
        const value = key
            .split(".")
            .reduce<any>((acc, k) => (acc ? acc[k] : undefined), dictionary);
        return typeof value === "string" ? value : key;
    };
}
