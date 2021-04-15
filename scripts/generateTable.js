
const marked = require('marked');
const cheerio = require('cheerio');
const { exit } = require('process');

// Default Paths
let source = "source.md"
let out = "out.md"

let data = "";
let outString = "";
fs = require('fs');

/**
 * generateTable.js
 * 
 * npm install -y marked cheerio
 * 
 * To add equations to the files simply make a equations div for each category followed by a `##` with the name of the category.
 * Below that, you then can add the equation title, followed by a description (optional) with the equation after that in double dollar signs. Anything after that is ignored.
 * Then to add the equation table, simply add a <equation-table></equation-table> tag. This is then replaced every time this is run. 
 * Also only ever add 1 of these, otherwise it will get replaced.
 * 
 * Then simply run the generateTables.sh file at the root of the project.
 * 
 * EG: 
 * 
 * <equation-table></equation-table>
 * 
 * <div class="equations">
 *
 * ## Capacitors
 *
 * ### Energy Stored
 * 
 * The energy stored by a capacitor of capacitance, C with a voltage, v
 * $$ E = \frac{1}{2} C V^2$$
 * 
 * - $C$ = Capacitance, Farads, F
 * - $V$ = Voltage, Volts, V
 *   
 * </div>
 */

// Run by using `node equations2table <source> <output>`
if (process.argv.length >= 3) {
    if (process.argv[2] != "-h") {
        source = process.argv[2];
        out = source;
    }
    else {
        console.log("To run, use 'node equations2table <source> <output>'")
        exit();
    }
}
if (process.argv.length >= 4)
    out = process.argv[3];

// Make sure file can be opened.
try {
    //Get file
    data = fs.readFileSync(source, 'utf8')
} catch (err) {
    console.log(`Unable to open file "${source}"`);
    return;
}

// Get string as html
let html = marked(data);

// Parse into dom object
const $ = cheerio.load(html);

// Start of string
let string = "<equation-table>\n\n";

// Iterate through each equation div and parse
$(".equations").each(function () {

    let thisHTMl = $(this);
    //Row start

    // Section Title
    // string += ` <a href="#${$("h2", thisHTMl).attr("id")}"> ${$("h2", thisHTMl).text()}</a>`;
    string += `| [${$("h2", thisHTMl).text()}](#${$("h2", thisHTMl).attr("id")})  | | \n`;
    string += `| ----------- | -----------  | \n`


    // For each equation
    $("h3", thisHTMl).each(function () {

        //Title
        string += `| [${$(this).text()}](#${$(this).attr("id")}) | `;
        try {
            string += `$${this.nextSibling.nextSibling.children[0].data.split("$$")[1]}$ | \n`;
        } catch (error) {
            string += `ERR | \n`;
        }

    });

    string += "\n"
}).get();

string += "</equation-table>";

//Replace div locater with the actual table
outString = data.replace(/<equation-table>((.|\n)*)(<\/equation-table>){1}/g, string);






//Write to file
fs.writeFile(out, outString, function (err) {
    if (err) return console.log(err);
    if (source == out) {
        // Thus same file
        console.log(`Generated tables for ${source}`);
    }
    else {
        console.log(`Converted ${source} to ${out}`);
    }


});


