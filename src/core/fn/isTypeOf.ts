export const isTypeOf = <T>(obj: any): boolean => {
    try {
        return obj satisfies T;
    }
    catch {
        return false;        
    }    
}