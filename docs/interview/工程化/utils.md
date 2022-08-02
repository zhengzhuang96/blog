const fs = require("fs");
const path = require("path");

export const exists = (_path) => {
	return fs.existsSync(_path) || path.existsSync(_path);
};

export const isFile = (_path) => {
	return exists(_path) && fs.statSync(_path).isFile();
};

export const isDir = (_path) => {
	return exists(_path) && fs.statSync(_path).isDirectory();
};

const src = "src";

function getFiles(dir) {
	const files = [];

	function traverse(p) {
		fs.readdirSync(p).forEach((file) => {
			const pathname = path.join(p, file);
			if (!pathname.includes("__test__")) {
				if (isDir(pathname)) {
					traverse(pathname);
				} else {
					files.push(pathname);
				}
			}
		});
	}

	traverse(dir);

	return files.filter((x) => !x.includes(".test.js") && !x.endsWith(".md"));
}

const moduleMap = getFiles(path.join(__dirname, `../${src}`));

export { moduleMap };
