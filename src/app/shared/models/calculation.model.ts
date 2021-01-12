import { OperatorModel } from "./operator.model";

export default interface CalculationModel {
    leftOperand: number;
    operator: OperatorModel;
    rightOperand: number;
}