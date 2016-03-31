import { Todo, TodoState } from './Model';

@validatable
export class ValidatableTodo implements Todo {

    id: number;

    name: string;

    state: TodoState;
}

export interface ValidatableTodo extends IValidatable {
}


export interface IValidatable {
    validate(): IValidationResult[];
}

export interface IValidationResult {
    isValid: boolean;
    message: string;
    property?: string;
}

export interface IValidator {
    (instance: Object): IValidationResult;
}

export function validate(): IValidationResult[] {
    let validators: IValidator[] = [].concat(this._validators),
        errors: IValidationResult[] = [];

    for (let validator of validators) {
        
        let result = validator(this);
        
        if(!result.isValid) {
            errors.push(result);
        }
        
    }
    
    return errors;
}

export function validatable(target: Function) {
    
    target.prototype.validate = validate;
    
}
