import{_ as t,o as e,c as s,d as n}from"./app.73a0ea12.js";const p={},a=n(`<p>const fs = require(&quot;fs&quot;); const path = require(&quot;path&quot;);</p><p>export const exists = (_path) =&gt; { return fs.existsSync(_path) || path.existsSync(_path); };</p><p>export const isFile = (_path) =&gt; { return exists(_path) &amp;&amp; fs.statSync(_path).isFile(); };</p><p>export const isDir = (_path) =&gt; { return exists(_path) &amp;&amp; fs.statSync(_path).isDirectory(); };</p><p>const src = &quot;src&quot;;</p><p>function getFiles(dir) { const files = [];</p><pre><code>function traverse(p) {
	fs.readdirSync(p).forEach((file) =&gt; {
		const pathname = path.join(p, file);
		if (!pathname.includes(&quot;__test__&quot;)) {
			if (isDir(pathname)) {
				traverse(pathname);
			} else {
				files.push(pathname);
			}
		}
	});
}

traverse(dir);

return files.filter((x) =&gt; !x.includes(&quot;.test.js&quot;) &amp;&amp; !x.endsWith(&quot;.md&quot;));
</code></pre><p>}</p><p>const moduleMap = getFiles(path.join(__dirname, <code>../\${src}</code>));</p><p>export { moduleMap };</p>`,10),o=[a];function r(i,c){return e(),s("div",null,o)}var _=t(p,[["render",r],["__file","utils.html.vue"]]);export{_ as default};
