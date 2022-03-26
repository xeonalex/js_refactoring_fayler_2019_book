import {statement} from "./src/statement.js";
import {invoices} from "./data/invoices.js";
import {plays} from "./data/plays.js";

const invoice = invoices[0]

console.log(statement(invoice, plays))
