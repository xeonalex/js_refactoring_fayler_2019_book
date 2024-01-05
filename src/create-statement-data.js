export default function createStatementData(invoice, plays) {
    const statementData = {
        customer: invoice.customer,
        performances: invoice.performances.map(enrichPeformance)
    }
    statementData.totalAmount = totalAmount(statementData)
    statementData.totalVolumeCredits = totalVolumeCredits(statementData)

    return statementData

    function playFor(aPerformance) {
        return plays[aPerformance.playlD];
    }

    function volumeCreditsFor(aPerformance) {
        let result = 0;
        result += Math.max(aPerformance.audience - 30, 0);

        // Дополнительный бонус за каждые 10 комедий
        if ("comedy" === aPerformance.play.type) result += Math.floor(aPerformance.audience / 5);

        return result;
    }

    function totalVolumeCredits(data) {
        let volumeCredits = 0;

        for (let perf of data.performances) {
            volumeCredits += perf.volumeCredits;
        }
        return volumeCredits
    }

    function totalAmount(data) {
        let result = 0;
        for (let perf of data.performances) {
            result += perf.amount;
        }

        return result
    }

    function enrichPeformance(aPerformance) {
        const result = Object.assign({}, aPerformance)
        const calculator = new PerformanceCalculator(aPerformance, playFor(result))
        result.play = calculator.play
        result.amount = calculator.amount
        result.volumeCredits = volumeCreditsFor(result)
        return result
    }
}

class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance
        this.play = aPlay
    }

    get amount() {
        let result = 0;
        switch (this.play.type) {
            case "tragedy":
                result = 40000;
                if (this.performance.audience > 30) {
                    result += 1000 * (this.performance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (this.performance.audience > 20) {
                    result += 10000 + 500 * (this.performance.audience - 20);
                }
                result += 300 * this.performance.audience;
                break;
            default:
                throw new Error(`unknown type: ${this.play.type}`);
        }

        return result
    }
}
