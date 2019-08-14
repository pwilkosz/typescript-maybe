
export class Maybe<T> {
    private constructor(private value: T | null) {}

    public static just<T>(value: T) {
        if (!value) {
            throw Error("Provided value must not be empty");
        }
        return new Maybe(value);
    }

    public static nothing<T>() {
        return new Maybe<T>(null);
    }

    public static from<T>(value: T | undefined) {
        return value ? Maybe.just(value) : Maybe.nothing<T>();
    }

    public getValueOr(defaultValue) : T | typeof defaultValue {
        return this.value === null ? defaultValue : this.value;
    }

    public map<R>(func: (wrapped: T) => R): Maybe<R> {
        if (this.value === null) {
            return Maybe.nothing<R>();
        } else {
            return Maybe.from(func(this.value));
        }
    }

    public flatMap<R>(f: (wrapped: T) => Maybe<R>): Maybe<R> {
        if (this.value === null) {
            return Maybe.nothing<R>();
        } else {
            return f(this.value);
        }
    }
}


