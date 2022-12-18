
var jsondata=[
  
    {
      "title"    : "Test examples",
      "category" : "",
      "tags"     : "",
      "url"      : "/blog/posts/2022/02/01/test.html",
      "date"     : "2022-02-01 00:00:00 -0800",
      "content"  : "{% if site.search_engine == \"js\" %}\nvar jsondata=[\n  {% for post in site.posts %}\n    {\n      \"title\"    : \"{{ post.title | escape }}\",\n      \"category\" : \"{{ post.category }}\",\n      \"tags\"     : \"{{ post.tags | join: ', ' }}\",\n      \"url\"      : \"{{ site.baseurl }}{{ post.url }}\",\n      \"date\"     : \"{{ post.date }}\",\n      \"content\"  : {{ page.content | jsonify }}\n    } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n  ,\n  {% for page in site.html_pages %}\n   {\n     {% assign title = page.title | default: page.name %}\n     {% if title != nil %}\n        \"title\"    : \"{{ title | escape }}\",\n        \"category\" : \"{{ page.category }}\",\n        \"tags\"     : \"{{ page.tags | join: ', ' }}\",\n        \"url\"      : \"{{ site.baseurl }}{{ page.url }}\",\n        \"date\"     : \"{{ page.date }}\",\n        \"content\"  : {{ page.content | jsonify }}\n     {% endif %}\n   } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n];\n\nvar sjs = SimpleJekyllSearch({\n    searchInput: document.getElementById('search-input'),\n    resultsContainer: document.getElementById('results-container'),\n    json: jsondata,\n    searchResultTemplate: '<li><a href=\"{url}\" title=\"{desc}\">{title}</a></li>',\n    noResultsText: 'No results found',\n    limit: 10,\n    fuzzy: false,\n    exclude: []\n  })\n{% endif %}\n\n"
    } ,
  
    {
      "title"    : "Advanced examples",
      "category" : "",
      "tags"     : "",
      "url"      : "/blog/posts/2020/02/01/advanced-examples.html",
      "date"     : "2020-02-01 00:00:00 -0800",
      "content"  : "{% if site.search_engine == \"js\" %}\nvar jsondata=[\n  {% for post in site.posts %}\n    {\n      \"title\"    : \"{{ post.title | escape }}\",\n      \"category\" : \"{{ post.category }}\",\n      \"tags\"     : \"{{ post.tags | join: ', ' }}\",\n      \"url\"      : \"{{ site.baseurl }}{{ post.url }}\",\n      \"date\"     : \"{{ post.date }}\",\n      \"content\"  : {{ page.content | jsonify }}\n    } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n  ,\n  {% for page in site.html_pages %}\n   {\n     {% assign title = page.title | default: page.name %}\n     {% if title != nil %}\n        \"title\"    : \"{{ title | escape }}\",\n        \"category\" : \"{{ page.category }}\",\n        \"tags\"     : \"{{ page.tags | join: ', ' }}\",\n        \"url\"      : \"{{ site.baseurl }}{{ page.url }}\",\n        \"date\"     : \"{{ page.date }}\",\n        \"content\"  : {{ page.content | jsonify }}\n     {% endif %}\n   } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n];\n\nvar sjs = SimpleJekyllSearch({\n    searchInput: document.getElementById('search-input'),\n    resultsContainer: document.getElementById('results-container'),\n    json: jsondata,\n    searchResultTemplate: '<li><a href=\"{url}\" title=\"{desc}\">{title}</a></li>',\n    noResultsText: 'No results found',\n    limit: 10,\n    fuzzy: false,\n    exclude: []\n  })\n{% endif %}\n\n"
    } ,
  
    {
      "title"    : "Markdown examples",
      "category" : "",
      "tags"     : "",
      "url"      : "/blog/posts/2017/02/01/markdown-examples.html",
      "date"     : "2017-02-01 00:00:00 -0800",
      "content"  : "{% if site.search_engine == \"js\" %}\nvar jsondata=[\n  {% for post in site.posts %}\n    {\n      \"title\"    : \"{{ post.title | escape }}\",\n      \"category\" : \"{{ post.category }}\",\n      \"tags\"     : \"{{ post.tags | join: ', ' }}\",\n      \"url\"      : \"{{ site.baseurl }}{{ post.url }}\",\n      \"date\"     : \"{{ post.date }}\",\n      \"content\"  : {{ page.content | jsonify }}\n    } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n  ,\n  {% for page in site.html_pages %}\n   {\n     {% assign title = page.title | default: page.name %}\n     {% if title != nil %}\n        \"title\"    : \"{{ title | escape }}\",\n        \"category\" : \"{{ page.category }}\",\n        \"tags\"     : \"{{ page.tags | join: ', ' }}\",\n        \"url\"      : \"{{ site.baseurl }}{{ page.url }}\",\n        \"date\"     : \"{{ page.date }}\",\n        \"content\"  : {{ page.content | jsonify }}\n     {% endif %}\n   } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n];\n\nvar sjs = SimpleJekyllSearch({\n    searchInput: document.getElementById('search-input'),\n    resultsContainer: document.getElementById('results-container'),\n    json: jsondata,\n    searchResultTemplate: '<li><a href=\"{url}\" title=\"{desc}\">{title}</a></li>',\n    noResultsText: 'No results found',\n    limit: 10,\n    fuzzy: false,\n    exclude: []\n  })\n{% endif %}\n\n"
    } 
  
  ,
  
   {
     
     
        "title"    : "404.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/404.html",
        "date"     : "",
        "content"  : "<!--- this file is needed for automatic creation of non existent pages --->\n"
     
   } ,
  
   {
     
     
        "title"    : "404: Page not found",
        "category" : "",
        "tags"     : "",
        "url"      : "/404.html",
        "date"     : "",
        "content"  : "<article>\n  <header><h1>404</h1></header>\n  <p>Page not found</p>\n</article>\n"
     
   } ,
  
   {
     
     
        "title"    : "Archive",
        "category" : "",
        "tags"     : "",
        "url"      : "/archive.html",
        "date"     : "",
        "content"  : "<article>\n  <header><h1>Archive</h1></header>\n  <ul class=\"archive\">\n    \n    <li>\n      <time datetime=\"2022-02-01T00:00:00-08:00\">2022-02-01</time>\n      <a href=\"/blog/posts/2022/02/01/test.html\">Test examples</a>\n    </li>\n    \n    <li>\n      <time datetime=\"2020-02-01T00:00:00-08:00\">2020-02-01</time>\n      <a href=\"/blog/posts/2020/02/01/advanced-examples.html\">Advanced examples</a>\n    </li>\n    \n    <li>\n      <time datetime=\"2017-02-01T00:00:00-08:00\">2017-02-01</time>\n      <a href=\"/blog/posts/2017/02/01/markdown-examples.html\">Markdown examples</a>\n    </li>\n    \n  </ul>\n</article>\n\n"
     
   } ,
  
   {
     
     
        "title"    : "index.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/blog/index.html",
        "date"     : "",
        "content"  : "<!--- this file is needed for automatic creation of blog page --->\n"
     
   } ,
  
   {
     
     
        "title"    : "Home",
        "category" : "",
        "tags"     : "",
        "url"      : "/",
        "date"     : "",
        "content"  : "\n  <article>\n  <header><h1>Posts</h1></header>\n  <ul class=\"archive\">\n    \n    <li>\n      <time datetime=\"2022-02-01T00:00:00-08:00\">2022-02-01</time>\n      <a href=\"/blog/posts/2022/02/01/test.html\">Test examples</a>\n    </li>\n    \n    <li>\n      <time datetime=\"2020-02-01T00:00:00-08:00\">2020-02-01</time>\n      <a href=\"/blog/posts/2020/02/01/advanced-examples.html\">Advanced examples</a>\n    </li>\n    \n    <li>\n      <time datetime=\"2017-02-01T00:00:00-08:00\">2017-02-01</time>\n      <a href=\"/blog/posts/2017/02/01/markdown-examples.html\">Markdown examples</a>\n    </li>\n    \n  </ul>\n</article>\n\n\n"
     
   } ,
  
   {
     
     
        "title"    : "main_page.md",
        "category" : "",
        "tags"     : "",
        "url"      : "/main_page",
        "date"     : "",
        "content"  : "<p>This is a sample of main page. You can edit it to start your wiki.</p>\n\n<p>For documentation, installation guide and demo of <a href=\"git-wiki-theme\">git-wiki-theme</a> visit this <a href=\"http://drassil.github.io/git-wiki/\">link</a></p>\n\n"
     
   } ,
  
   {
     
     
        "title"    : "redirect.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/",
        "date"     : "",
        "content"  : ""
     
   } ,
  
   {
     
     
        "title"    : "README.md",
        "category" : "",
        "tags"     : "",
        "url"      : "/assets/katex/",
        "date"     : "",
        "content"  : "# [<img src=\"https://katex.org/img/katex-logo-black.svg\" width=\"130\" alt=\"KaTeX\">](https://katex.org/)\n[![npm](https://img.shields.io/npm/v/katex.svg)](https://www.npmjs.com/package/katex)\n[![CI](https://github.com/KaTeX/KaTeX/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/KaTeX/KaTeX/actions?query=workflow%3ACI)\n[![codecov](https://codecov.io/gh/KaTeX/KaTeX/branch/master/graph/badge.svg)](https://codecov.io/gh/KaTeX/KaTeX)\n[![Discussions](https://img.shields.io/badge/Discussions-join-brightgreen)](https://github.com/KaTeX/KaTeX/discussions)\n[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/katex/badge?style=rounded)](https://www.jsdelivr.com/package/npm/katex)\n![katex.min.js size](https://img.badgesize.io/https://unpkg.com/katex/dist/katex.min.js?compression=gzip)\n[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/KaTeX/KaTeX)\n\nKaTeX is a fast, easy-to-use JavaScript library for TeX math rendering on the web.\n\n * **Fast:** KaTeX renders its math synchronously and doesn't need to reflow the page. See how it compares to a competitor in [this speed test](http://www.intmath.com/cg5/katex-mathjax-comparison.php).\n * **Print quality:** KaTeX's layout is based on Donald Knuth's TeX, the gold standard for math typesetting.\n * **Self contained:** KaTeX has no dependencies and can easily be bundled with your website resources.\n * **Server side rendering:** KaTeX produces the same output regardless of browser or environment, so you can pre-render expressions using Node.js and send them as plain HTML.\n\nKaTeX is compatible with all major browsers, including Chrome, Safari, Firefox, Opera, Edge, and IE 11.\n\nKaTeX supports much (but not all) of LaTeX and many LaTeX packages. See the [list of supported functions](https://katex.org/docs/supported.html).\n\nTry out KaTeX [on the demo page](https://katex.org/#demo)!\n\n## Getting started\n\n### Starter template\n\n```html\n<!DOCTYPE html>\n<!-- KaTeX requires the use of the HTML5 doctype. Without it, KaTeX may not render properly -->\n<html>\n  <head>\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css\" integrity=\"sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw\" crossorigin=\"anonymous\">\n\n    <!-- The loading of KaTeX is deferred to speed up page rendering -->\n    <script defer src=\"https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.js\" integrity=\"sha384-FaFLTlohFghEIZkw6VGwmf9ISTubWAVYW8tG8+w2LAIftJEULZABrF9PPFv+tVkH\" crossorigin=\"anonymous\"></script>\n\n    <!-- To automatically render math in text elements, include the auto-render extension: -->\n    <script defer src=\"https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/contrib/auto-render.min.js\" integrity=\"sha384-bHBqxz8fokvgoJ/sc17HODNxa42TlaEhB+w8ZJXTc2nZf1VgEaFZeZvT4Mznfz0v\" crossorigin=\"anonymous\"\n        onload=\"renderMathInElement(document.body);\"></script>\n  </head>\n  ...\n</html>\n```\n\nYou can also [download KaTeX](https://github.com/KaTeX/KaTeX/releases) and host it yourself.\n\nFor details on how to configure auto-render extension, refer to [the documentation](https://katex.org/docs/autorender.html).\n\n### API\n\nCall `katex.render` to render a TeX expression directly into a DOM element.\nFor example:\n\n```js\nkatex.render(\"c = \\\\pm\\\\sqrt{a^2 + b^2}\", element, {\n    throwOnError: false\n});\n```\n\nCall `katex.renderToString` to generate an HTML string of the rendered math,\ne.g., for server-side rendering.  For example:\n\n```js\nvar html = katex.renderToString(\"c = \\\\pm\\\\sqrt{a^2 + b^2}\", {\n    throwOnError: false\n});\n// '<span class=\"katex\">...</span>'\n```\n\nMake sure to include the CSS and font files in both cases.\nIf you are doing all rendering on the server, there is no need to include the\nJavaScript on the client.\n\nThe examples above use the `throwOnError: false` option, which renders invalid\ninputs as the TeX source code in red (by default), with the error message as\nhover text.  For other available options, see the\n[API documentation](https://katex.org/docs/api.html),\n[options documentation](https://katex.org/docs/options.html), and\n[handling errors documentation](https://katex.org/docs/error.html).\n\n## Demo and Documentation\n\nLearn more about using KaTeX [on the website](https://katex.org)!\n\n## Contributing\n\nSee [CONTRIBUTING.md](CONTRIBUTING.md)\n\n## License\n\nKaTeX is licensed under the [MIT License](http://opensource.org/licenses/MIT).\n"
     
   } 
  
];

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: jsondata,
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: []
  })


