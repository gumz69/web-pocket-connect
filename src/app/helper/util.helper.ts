export function isLetterPattern(value:string):boolean{
    const letterPattern = /^[a-zA-Z\s]+$/;
    return letterPattern.test(value);
}

export function isMinEnamChar(input: string):boolean{
    const regex = /^.{6,}$/;
    return regex.test(input);
}

export function isEnamChar(input: string):boolean{
    const regex = /^.{6}$/;
    return regex.test(input);
}

export function isSepuluhChar(input: string):boolean{
    const regex = /^.{10}$/;
    return regex.test(input);
}

export function isMinDuaBelasChar(input: string):boolean{
    const regex = /^.{12,}$/;
    return regex.test(input);
}

export function isNumber(input: string): boolean{
    const  rgxNum = /^[0-9]+$/;
    return rgxNum.test(input);
}
