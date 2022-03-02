import ts = require('typescript');
import glob = require('glob');
import fs = require('fs');

const base = "../ag-grid/";
const files = glob.sync(`${base}/**/*.ts`);

const allNodes: ts.Node[]=[]

files.forEach(file => {
    const src = fs.readFileSync(file, 'utf8');
    const temp = ts.createSourceFile('tempFile.ts', src, ts.ScriptTarget.Latest, true);
    const interfaces: ts.Node[] = []
    temp.forEachChild(node => {
        if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
            const intf = node as ts.InterfaceDeclaration
            console.log(intf.name.escapedText)
        }
    })
})
