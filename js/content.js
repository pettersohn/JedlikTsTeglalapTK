"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        // a weboldal fejrésze:
        res.write("<head>");
        res.write("<title> TéglalapTK</title>");
        res.write("</head>");
        res.write("<body><form style='font-family:Courier; font-size:24px'>");
        res.write("<h1>Téglalap kerülete és területe</h1>");
        const query = url.parse(req.url, true).query;
        // tslint:disable-next-line: max-line-length
        const a = query.aInput === undefined ? 5 : parseFloat(query.aInput); // number = 64 bites lebegőpontos szám
        const b = query.bInput === undefined ? 6 : parseFloat(query.bInput);
        res.write("<p>a= ");
        res.write(`<input type='number' name='aInput' value=${a} onChange='this.form.submit();'`);
        res.write("</p>");
        res.write("<br>");
        res.write("<p>b= ");
        res.write(`<input type='number' name='bInput' value=${b} onChange='this.form.submit();'`);
        res.write("</p>");
        const terulet = a * b;
        const kerulet = 2 * (a + b);
        res.write(`<p>T=${terulet}</p>`);
        res.write(`<p>K=${kerulet}</p>`);
        res.write("</form></body>");
        res.write("</html>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map