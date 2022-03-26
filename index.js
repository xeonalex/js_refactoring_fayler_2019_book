import {statement} from "./src/statement.js";
import {invoices} from "./data/invoices.js";
import {plays} from "./data/plays.js";

const invoice = invoices[0]

const result = statement(invoice, plays)
console.log(result)


const expectedResult = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`

if (result === expectedResult) {
    console.info('SUCCESS')
} else {
    console.error('FAILED')
}

