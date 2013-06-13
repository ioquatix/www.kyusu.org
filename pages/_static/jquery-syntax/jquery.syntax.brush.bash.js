// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.brushes.dependency("bash","bash-script");Syntax.register("bash",function(a){a.push({pattern:/^([\w@:~ ]*?[\$|\#])\s+(.*?)$/gm,matches:Syntax.extractMatches({klass:"prompt"},{brush:"bash-script"})});a.push({pattern:/^\-\- .*$/gm,klass:"comment",allow:["href"]});a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape);a.push(Syntax.lib.webLink);a.push({klass:"stderr",allow:["string","comment","constant","href"]})});
