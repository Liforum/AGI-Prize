// rankingService.ts

/**
 * Ranking calculation and reweighting logic
 * This service provides functionality to calculate rankings and reweight them based on updated criteria.
 */

class RankingService {
    constructor() {}

    /**
     * Calculate rankings based on provided scores
     * @param scores Array of scores to rank
     * @returns Array of ranked scores
     */
    calculateRanking(scores: number[]): number[] {
        // Sort the scores in descending order
        return scores.sort((a, b) => b - a);
    }

    /**
     * Reweight rankings based on new criteria
     * @param rankings Array of current rankings
     * @param weights Array of weights to apply
     * @returns Array of reweighted rankings
     */
    reweightRankings(rankings: number[], weights: number[]): number[] {
        return rankings.map((score, index) => score * weights[index]);
    }
}

export default new RankingService();
