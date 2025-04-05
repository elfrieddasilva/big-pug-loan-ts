import {ScoringColor} from "./scoring-color";

export class OverallScoringResult {
    readonly points: number;
    readonly color: ScoringColor;

    constructor(points: number, color: ScoringColor) {
        this.points = points;
        this.color = color;
    }
}