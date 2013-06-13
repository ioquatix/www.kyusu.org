// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("yaml",function(a){a.push({pattern:/^\s*#.*$/gm,klass:"comment",allow:["href"]});a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push({pattern:/(&|\*)[a-z0-9]+/gi,klass:"constant"});a.push({pattern:/(.*?):/gi,matches:Syntax.extractMatches({klass:"keyword"})});a.push(Syntax.lib.webLink)});
