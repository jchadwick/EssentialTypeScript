class KeyValuePair<TKey, TValue> {
    
    constructor(
        public key: TKey,
        public value: TValue
    ) {
    }
    
}

class KeyValuePairPrinter<T, U> {
    
    constructor(private pairs: KeyValuePair<T, U>[]) {
    }
    
    print() {
        
        for ( let p of this.pairs ) {
            console.log(`${p.key}: ${p.value}`)
        }
    }
    
}
