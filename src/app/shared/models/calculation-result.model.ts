import { OperatorModel } from "./operator.model";

export default interface CalculationResultModel {
    id: number;
    leftOperand: number;
    operator: OperatorModel;
    rightOperand: number;
    result: number;
}