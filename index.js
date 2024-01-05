import {htmlStatement, statement} from "./src/statement.js";
import {invoices} from "./data/invoices.js";
import {plays} from "./data/plays.js";

const invoice = invoices[0]

const resultText = statement(invoice, plays)
console.log(resultText)

const resultHtml = htmlStatement(invoice, plays)
console.log(resultHtml)

const expectedTextResult = `Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`

const expectedHtmlResult = `<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>amount</th></tr>
<tr><td>Hamlet</td><td>55</td><td>$650.00<td></tr>
<tr><td>As You Like It</td><td>35</td><td>$580.00<td></tr>
<tr><td>Othello</td><td>40</td><td>$500.00<td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>You earned <em>47</em> credits</p>
`

console.info('RESULT:')
printResult('text', resultText, expectedTextResult)
printResult('html', resultHtml, expectedHtmlResult)

function printResult(representationType, result, expected) {
    if (result === expected) {
        console.info(`${representationType}: SUCCESS`)
    } else {
        console.error(`${representationType}: FAILED`)
    }
}
