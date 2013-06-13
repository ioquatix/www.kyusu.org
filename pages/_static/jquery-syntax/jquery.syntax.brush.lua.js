// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("lua",function(a){a.push(["self","true","false","nil"],{klass:"constant"});a.push("and break do else elseif end false for function if in local nil not or repeat return then true until while".split(" "),{klass:"keyword"});a.push("+ - * / % ^ # .. = == ~= < > <= >= ? :".split(" "),{klass:"operator"});a.push(Syntax.lib.camelCaseType);a.push(Syntax.lib.cStyleFunction);a.push({pattern:/\-\-.*$/gm,klass:"comment",allow:["href"]});a.push({pattern:/\-\-\[\[(\n|.)*?\]\]\-\-/gm,klass:"comment",
allow:["href"]});a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape);a.push(Syntax.lib.hexNumber);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.webLink)});
